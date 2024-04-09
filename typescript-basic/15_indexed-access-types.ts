// indexed access types (인덱스드 액세스 타입)
// 다른 타입의 특정 속성이 갖는 타입을 조회

type MyType = {
  a: number;
  b: string;
  c: boolean;
};

// 인덱스에는 union, keyof type alias 등 사용 가능
type IndexedAccess1 = MyType["a"];
type IndexedAccess2 = MyType["a" | "b"]; // number | string
type IndexedAccess3 = MyType[keyof MyType]; // number | string | boolean

const BirdList = [
  { pet: "parrot", name: "Birdy" },
  { pet: "finch", name: "Birby" },
  { pet: "finch", name: "Borby" },
  { pet: "dove", name: "Blorby" },
];

// { pet: string; name: string }
type BirdItemType = (typeof BirdList)[number];
