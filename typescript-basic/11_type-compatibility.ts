// type compatibility (타입 호환성) - structural typing 구조적 타이핑
// 내부에 동일 member 를 가지고 있을 경우 type 이 호환된다고 추론

// interface, class: property
interface Developer {
  name: string;
  skill: string;
}
let developer: Developer;
const cracker = { name: "Cracker", skill: "react", role: "frontend" };
developer = cracker;

// constructor, static member 를 제외하고 property 만을 비교한다.
class Staff {
  name: string;
}
let staff = new Staff();
const polly = { name: "Polly", age: 100 };
staff = polly;

// function: parameter
let funcA = function (a: number) {};
let funcB = function (a: number, b: string) {};
// funcA = funcB; // error
funcB = funcA;

// generic
// property 자체가 없으므로 같은 type 으로 추론된다.
interface Empty<T> {}
let empty1: Empty<string> = "hi";
let empty2: Empty<number> = 100;
empty1 = empty2;
empty2 = empty1;

// property 의 type 이 다르므로 다른 type 으로 추론된다.
interface NotEmpty<T> {
  key: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2; // error
// notEmpty2 = notEmpty1; // error
