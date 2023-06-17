// 1. string
const str: string = "hello";

// 2. number
const num: number = 10;

// 3. array
// array(number)
const numInArr1: number[] = [1, 2, 3];
const numInArr2: Array<number> = [1, 2, 3];

// array(string)
const strInArr1: string[] = ["parrot", "heron", "hawk"];
const strInArr2: Array<string> = ["parrot", "heron", "hawk"];

// array(object)
const objInArr1: object[] = [
  { id: 1, title: "hi", done: true },
  { id: 2, title: "bye", done: false },
];
const objInArr2: Array<object> = [
  { id: 1, title: "hi", done: true },
  { id: 2, title: "bye", done: false },
];

// array(type object)
const objInArr3: { id: number; title: string; done: boolean }[] = [
  { id: 1, title: "hi", done: true },
  { id: 2, title: "bye", done: false },
];

// 4. tuple
const tuple: [string, number] = ["cracker", 100];

// 5. object
const obj1: object = {};
const obj2: object = {
  item: "cracker",
  count: 100,
};

// type object
const obj3: { item: string; count: number } = {
  item: "cracker",
  count: 100,
};

// 6. boolean
let bool: boolean = true;

// 7. enum
// numeric enum
enum Responses {
  NO,
  YES,
}
const userRes = Responses.NO; // 0

// string enum
enum Commends {
  UP = "UP",
  DOWN = "DOWN",
  LERT = "LEFT",
  RIGHT = "RIGHT",
}
const userCmd = Commends.UP; // UP

// 8. any: 어떤 type 이든 할당 가능. 사용 지양
let any: any = "hi";
any = 100;
any = false;

// type inference(타입 추론)
// type 을 지정하지 않으면 typescript 에서 type 을 추론

const inferNum = 100; // number
const inferStr = "hi"; // string

// return 값의 type 추론
function getReturn(a: number) {
  let b = "hi";
  return a + b;
} // function getReturn(a: number): string

// type assertion(타입 단언)
// 최종적으로 사용할 type 을 지정

let assertA: any;
assertA = 10;
assertA = "hi";
let assertB = assertA as string;

// DOM 접근
const divElement = document.querySelector("#app") as HTMLDivElement;
divElement.innerHTML;
