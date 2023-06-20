// type guard
// type 에 따른 분기 처리

interface Developer {
  name: string;
  role: string;
}
interface Applicant {
  name: string;
  age: number;
}
function getInfo(): Developer | Applicant {
  return { name: "jenny", age: 33, role: "frontend" };
}
const jenny = getInfo();
// union 을 반환하므로 공통 속성에만 접근할 수 있다.
console.log(jenny.name);
// console.log(jenny.role); // error

// type assertion 을 사용하면 복잡해진다.
if ((jenny as Developer).role) {
  const role = (jenny as Developer).role;
  console.log(role);
} else if ((jenny as Applicant).age) {
  const age = (jenny as Applicant).age;
  console.log(age);
}

// type guard 사용
function isDeveloper(target: Developer | Applicant): target is Developer {
  // target 이 Developer 일 때 role 이 undefined 가 아닌지 판단
  return (target as Developer).role !== undefined;
}
if (isDeveloper(jenny)) {
  console.log(jenny.role);
} else {
  console.log(jenny.age);
}
