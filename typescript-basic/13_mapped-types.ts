// mapped types
// 기존에 정의한 type 을 바탕으로 새로운 type 생성(map() 과 유사)
// https://www.typescriptlang.org/ko/docs/handbook/2/mapped-types.html

// keyof 키워드로 type 을 반복 생성할 수 있다.
// { [K in keyof T]: T[K] }

// mapping modifiers: readonly 와 ? 수정자를 사용할 수 있다.
// { [P in K]: T }
// { [P in K]?: T }
// { readonly [P in K]: T }
// { readonly [P in K]?: T }

type Birds = "sparrow" | "swallow" | "magpie";
type BirdLifespan = { [K in Birds]: number };
/*
type BirdLifespan = {
  sparrow: number;
  swallow: number;
  magpie: number;
};
*/
const BirdInfo: BirdLifespan = {
  sparrow: 3,
  swallow: 2,
  magpie: 3,
};

interface Contact {
  phone: string;
  email: string;
}
// generic 으로 받은 type 내 property 를
// 초기화 값에 따라 선택적으로 정의한 type
// utility type 의 Partial 과 동일하다.
type ContactSubset<T> = {
  [K in keyof T]?: T[K];
};
// 여러 type 의 객체 생성
const myPhone: ContactSubset<Contact> = { phone: "010-1111-1111" };
const myContact: ContactSubset<Contact> = {
  phone: "010-2222-2222",
  email: "myemail@email.com",
};
// 특정 속성만을 선택적으로 update 가능
type ContactUpdate = {
  [K in keyof Contact]?: Contact[K];
};
function updateContact(value: ContactUpdate) {}
