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

## ts(2339)

```
Property 'propA' does not exist on type 'MyObj'.
Property 'propA' does not exist on type 'MyObjTypeB'.
```

- 프로퍼티가 다른 여러 객체가 한 배열 안에 있어 `type MyObj = MyObjTypeA | MyObjTypeB` 으로 작성한 상태에서,  
  `MyObjTypeA` 에만 존재하는 특정 프로퍼티 값을 확인해야 할 경우 발생
- `in` 연산자: 속성이 해당 객체에 존재하면 `true` 반환
- 만약 `Array.map()` 을 사용하여 `routerData` 배열을 `router` 객체의 `isAdminPage` 키의 값을 확인하여  
  JSX element 프로퍼티를 작성할 경우...  
  `isAdminPage={"isAdminPage" in router && router.isAdminPage}`

## ts(2769)

```
No overload matches this call.
// ...
Type '(...) => ...' is not assignable to type '...'.
```

- 메서드에 정의되어 있는 콜백 type 과 콜백으로 넘겨주려는 함수의 type 이 서로 일치하지 않는 경우
- 함수의 overload 는 여러 개의 함수를 같은 이름으로 정의하고 매개변수, return 타입 등을 달리하여 여러 동작을 수행하는 것.  
  즉 해당 함수의 선언된 오버로드 중 어떤 것도 현재 호출에 맞지 않는다는 의미
- 해당 메서드의 spec 을 확인한 후, 인자인 함수의 type 을 수정
- 현재 tsconfig.json 의 `"compilerOptions"` 에서 `"strict"` 또는 `"strictFunctionTypes"` 가 `true` 로 설정되어 있음
