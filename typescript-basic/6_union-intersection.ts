// any 의 문제점: 부적절한 type 의 값까지 전달할 수 있다.
function showAnything(value: any) {
  console.log(value);
}
showAnything("hello");
showAnything(100);
showAnything(false);

// union / intersection type: parameter 나 변수에 한 가지 이상의 타입 명시 가능
// any 와 달리 type 에 맞는 API 가 자동완성 된다.
let value: string | number;
function showSomthing(value: string | number) {
  // type guard: 인자의 type 에 따른 분기 처리
  if (typeof value === "number") value.toString();
  if (typeof value === "string") value.split(" ");
  throw new TypeError("value must be string or number");
}
showSomthing("hello");
showSomthing(100);

interface Member {
  name: string;
  level: number;
}
interface Customer {
  name: string;
  country: string;
}

// union type(OR)
let unionValue: string | number | boolean;
function findSomeone1(someone: Member | Customer) {
  // 공통 속성에만 접근 가능
  someone.name;
  // someone.skill; // error
  // someone.age; // error
}
// 일부 속성의 값을 넘길 수 있다.
findSomeone1({ name: "polly", country: "Korea" });
findSomeone1({ name: "cracker", level: 100 });

// intersection type(AND)
// let interValue: string && number && boolean; // error
function findSomeone2(someone: Member & Customer) {
  // 모든 속성에 접근 가능
  someone.name;
  someone.country;
  someone.level;
}
// 모든 속성의 값을 넘겨야 한다.
findSomeone2({ name: "polly", country: "Korea", level: 100 });
