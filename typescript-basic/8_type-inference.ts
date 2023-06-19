// type inference(타입 추론)
// type 을 지정하지 않으면 typescript 에서 type 을 추론

const inferNum = 100; // number
const inferStr = "hi"; // string
function getReturn(param: number) {
  const value = "hi"; // string
  return value + param;
} // function getReturn(param: number): string

interface Phone<T> {
  name: string;
  number: T;
}
const phoneValue: Phone<string> = {
  name: "Polly",
  number: "010-1111-1111", // string
};

interface Post<T> {
  title: T;
  content: string;
}
interface PostDetail<U> extends Post<U> {
  // 암묵적으로 title 과 content 가 포함된다.
  description: string;
  tag: U;
  // Post 의 title type 은 U 로 받는 type 으로 추론된다.
  // 즉, tag 와 title 의 type 은 같다.
}

const detailedPost: PostDetail<string> = {
  // 모든 속성이 작성되어야 한다.
  title: "hello",
  content: "have a good day",
  description: "polly posted this",
  tag: "greeting",
};

// Best Common Type
// 변수 초기화 시 가장 근접한 type 을 추론
const array = [1, 2, true, true, "hi"]; // array: number | boolean | string (union)
const object = {
  name: "Cracker", // string
  age: 100, // number
  married: false, // boolean
};
