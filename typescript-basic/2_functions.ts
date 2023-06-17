// return 값 type 추론
function sum(a: number, b: number) {
  return a + b;
}

// return 값 type 명시
function multiply(a: number, b: number): number {
  return a * b;
}
// sum(10, 20, 30, 40); // error
// sum(10); // error

// void: return 값 없음
function sayHi(text: string): void {
  console.log(text);
}

// optional parameter 사용
function showLog(a: string, b?: string) {
  console.log(a);
  console.log(b);
}
showLog("hello world"); // error X
showLog("hello ts", "abc"); // error X

// default parameter 사용
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

// rest parameter 사용
function getName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// 함수 선언식
function func1(a: number, b: number): number {
  return a + b;
}
// 함수 표현식
const func2 = function (a: number, b: number): number {
  return a + b;
};
// 화살표 함수
const func3 = (a: number, b: number): number => {
  return a + b;
};
