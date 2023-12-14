# Errors

## ts(7016)

```
Could not find a declaraction file for module 'package-name'.
'/my-project/node_modules/package-name/dist/index.js' implicitly has an 'any' type.
Try `npm install @types/package-name` if it exists or add a new declaration (.d.ts) file containing `declare module 'package-name';`;
```

- 타입 선언이 제대로 되어있지 않은 라이브러리일 경우 import 시 에러 발생
- type definition library(@types/) 가 있는지 찾거나, 2. index.d.ts 파일을 직접 작성  
  (type definition library 는 --save dev 로 설치할 것)
- [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped) : 유명 JavasScript 라이브러리를 TypeScript 에 이식할 수 있도록 하는 오픈소스 라이브러리
- index.d.ts :  
  import 한 라이브러리를 Mac: option 키, Windows: ctrl 키로 클릭하여 열리는  
  node_modules/패키지 또는 node_modules/@types/패키지 내부 파일  
  외부 라이브러리, 자바스크립트 라이브러리를 타입스크립트에서 인식할 수 있도록 type 을 정의하는 파일

### index.d.ts 파일 작성

1. 프로젝트 최상위 경로에서 사용자 정의 폴더 생성 (ex. types)
2. tsconfig.json 에서 type 파일 경로 지정 (ex. "./types")

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./types"]
  }
}
```

3. types 폴더 내부에 해당 패키지명(ex. package-name)으로 폴더 생성 후, 해당 폴더에 index.d.ts 생성
4. index.d.ts 에서 `declare module 'package-name';` 작성  
   (구체적인 메서드 타이핑: `declare module 'package-name' { //... interface MyModule {} }`)

## ts(1259)

```
Module '"/.../node_modules/@types/package-name/index"' can only be default-imported using the 'esModuleInterop' flag.
This module is declared with using 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.
```

- commonJS 형식으로 구현된 라이브러리일 경우
- `import \* as ModuleName from "package-name";` 로 import 문 수정

## ts(7053)

```
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
No index signature with a parameter of type 'string' was found on type '{}'.
```

- string key 로 객체에 접근할 경우
- index signature 사용

```ts
interface MyObj {
  category: string;
  id: number;
  price: number;
  title: string;
}

// index signature
interface CountData {
  [key: string]: number;
}

const myData: MyObj[] = [
  {
    category: "clothing",
    id: 1,
    price: 100,
    title: "Shirts",
  },
  {
    category: "jewelery",
    id: 2,
    price: 500,
    title: "Bracelet",
  },
  {
    category: "clothing",
    id: 3,
    price: 100,
    title: "Jacket",
  },
];

const setCountDataA = (data: MyObj[]): CountData => {
  const arr: CountData = {};
  for (let item of data) {
    arr[item.category] ??= 0;
    arr[item.category] += 1;
  }
  return arr;
};

const setCountDataB = (data: MyObj[]): CountData => {
  return data.reduce((acc: CountData, cur) => {
    acc[cur.category] ??= 0;
    acc[cur.category] += 1;
    return acc;
  }, {});
};
```

## ts(17008), ts(2304)

```
JSX element 'T' has no corresponding closing tag.
Cannot find name 'T'.
```

- `<T>`를 JSX 태그로 해석하므로 `<T, >` 로 수정
