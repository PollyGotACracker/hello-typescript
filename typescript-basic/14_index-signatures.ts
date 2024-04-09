// index signatures (인덱스 시그니처)
// 특정 타입의 속성 이름은 알 수 없으나 속성 값의 타입은 알고 있을 때 사용

// [key: K]: T
// 해당 타입의 속성 키는 모두 K, 값은 T 타입이어야 한다.
interface IndexSignature {
  [key: string]: number | string;
  name: string;
  length: number;
  //   isChecked: boolean; => X
}

// 추가로 명시한 다른 속성들도 인덱스 시그니처에 포함되는 타입이어야 한다.
// 위 예시에서는 number, string 외 다른 타입을 사용할 수 없다.
