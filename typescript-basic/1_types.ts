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
const bool: boolean = true;

// 7. enum
// numeric enum
enum Responses {
  No,
  Yes,
}
const userRes = Responses.No; // 0
// reverse mapping: 숫자형 enum 에서만 가능
const userResKey = Responses[value]; // No
// string enum
enum Commands {
  Up = "UP",
  Down = "DOWN",
}
const userCmd = Commands.Up; // UP
// parameter type 이 enum 인 함수에 인수 전달 시 해당 enum 에 정의된 속성만 허용된다.
function logCommand(command: Commands) {
  if (command === Commands.Up) console.log("User Command: Up");
  if (command === Commands.Down) console.log("User Command: Down");
}
// 데이터의 item 객체(object) 의 key 를 enum 속성의 value 로 정의한 후,
// select 또는 update 하는 함수 parameter 에
// 전달할 값의 type 과 enum type(key) 을 함께 지정한다.

// 8. any: 어떤 type 이든 할당 가능. 사용 지양
let any: any = "hi";
any = 100;
any = false;
