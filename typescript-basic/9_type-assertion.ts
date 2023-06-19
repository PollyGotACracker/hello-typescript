// type assertion(타입 단언)
// 최종적으로 사용할 type 을 지정

let assertA;
assertA = 10;
assertA = "hi";
let assertB = assertA as string;

// DOM 접근
// null 이 아님을 보장
const divElement = document.querySelector("#app") as HTMLDivElement;
divElement.innerHTML;
