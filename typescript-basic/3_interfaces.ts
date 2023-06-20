// 객체 생성 시 요구되는 속성 및 메서드를 정의한다(구현 X).
interface User {
  // optional property
  age?: number;
  // readonly
  readonly name: string;
}

// 1. 변수 type 으로 사용
let john: User = {
  age: 33,
  name: "john",
};

// 2. 함수의 parameter type 으로 사용
function getUser(user: User) {
  console.log(user);
}
// 인수에는 interface 의 optional property 를 제외한 모든 property(속성) 이 작성되어야 한다.
let item = { name: "sarah" };
getUser(item);

// 3. 함수 자체의 type 으로 사용
// 함수의 스펙(구조) 정의
interface AddFunc {
  (a: number, b: number): number;
}
let add: AddFunc;
add = function (a: number, b: number): number {
  return a + b;
};

// array indexing(index : 0 ~) 사용
interface StringArray {
  [index: number]: string;
}
let arrAlphabet: StringArray = ["a", "b", "c"];
arrAlphabet[0] = "d"; // "a" 에서 "d" 로 재할당된다.
// arrAlphabet[0] = 10; // error(string type 이므로)

// dictionary pattern(key : value) 사용
// interface 에서 속성을 직접 정의하지 않을 때
interface StringRegexDictionary {
  [key: string]: RegExp;
}
let ext: StringRegexDictionary = {
  css: /\.css$/,
  js: /\.js$/,
};
// ext["css"] = "a"; // error(RegExp type 이므로)

// interface 확장(상속)
interface Employee {
  name: string;
  age: number;
}
interface Designer extends Employee {
  skill: string;
}
let sarah: Designer = {
  // 모든 속성이 작성되어야 한다.
  age: 30,
  name: "sarah",
  skill: "photoshop",
};
