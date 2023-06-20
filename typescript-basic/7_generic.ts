// generics: type 을 별도의 parameter 로 받아 재사용 가능한 컴포넌트 작성
// https://www.typescriptlang.org/ko/docs/handbook/2/generics.html#hello-world-of-generics

/**
 * parameter 의 type 만 다른 함수를 단순 분리
 * 유지보수 측면에서 좋지 않음
 */
https: function allowString(str: string) {
  return str;
}
function allowNumber(num: number) {
  return num;
}
const string = allowString("a");
const number = allowNumber(10);

/**
 * union type 의 문제점
 * 반환값의 정확한 타입이 정의되지 않기 때문에
 * 적절한 메서드를 사용하더라도 error 가 발생
 */

function allowStrNum(value: string | number) {
  return value;
}
const a = allowStrNum("a");
// a.split(" "); // error
allowStrNum(10);

// 함수에 generic 사용
function useGeneric<T>(value: T): T {
  return value;
}
// generic 을 두 개 이상 사용할 경우, T 다음 알파벳(U~)을 관용적으로 사용한다.
function useMoreGenerics<T, U>(str: T, num: U): [T, U] {
  return [str, num];
}

// 호출하는 시점에 데이터 형식을 정의한다.
const string2 = useGeneric<string>("안녕"); // string
string2.split(" ");
const number2 = useGeneric<number>(100); // number

// interface 에 generic 사용
interface Item<T> {
  value: T;
  selected: boolean;
}
const objStr: Item<string> = { value: "abc", selected: false };
const objNum: Item<number> = { value: 100, selected: true };

// 함수의 parameter 및 return 에 generic 의 array type 지정
function useArrayFunc<T>(arr: T[]): T[] {
  // 배열 API에 접근할 수 있게 된다.
  console.log(arr.length);
  arr.forEach(function (ele) {
    console.log(ele);
  });
  return arr;
}
useArrayFunc<string>(["abc", "def", "ghi"]);
useArrayFunc<number>([100, 200, 300]);

// type 을 명확히 정의하지 않으면서 특정 속성이 있는 인자를 받음
interface PropType {
  length: number;
}
function useLengthFunc<T extends PropType>(text: T): T {
  // function useLengthFunc<T extends { length: number }>(text: T): T {
  text.length;
  return text;
}
useLengthFunc({ value: "hello", length: 5 }); // 값에 length 속성이 있으므로 가능
useLengthFunc("a"); // string 에 length 속성이 있으므로 가능
// logTextLength2(10); // error

// 특정 메서드가 있는 인자를 받음
function createItemOption<T extends { toString: Function }>(item: Item<T>) {
  const option = document.createElement("option");
  // toString 메서드를 사용할 수 있게 된다.
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// keyof: property 의 key 리스트를 union 형태로 반환
interface Product {
  name: string;
  price: number;
  brand: string;
  stock: number;
}
const productData: Product[] = [
  {
    name: "a",
    price: 100,
    brand: "Polly",
    stock: 500,
  },
  { name: "b", price: 200, brand: "Cracker", stock: 200 },
];
function getProductsInfo<T extends keyof Product>(key: T): Product[] {
  return this.data.map((ele: Product) => ele[key]);
}
getProductsInfo("name");
getProductsInfo("brand");

// Promise 는 구조상 generic 을 통해 type 을 받아야만 한다.
function fetchItems(): Promise<string[]> {
  let items: string[] = ["a", "b", "c"];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems();
// new Promise((resolve, reject)=>{...}) 호출 => pending
// -> resolve(result) 실행 => fulfilled
// -> reject(new Error(...)) 실행 => rejected
