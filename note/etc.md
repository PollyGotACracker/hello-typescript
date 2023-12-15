# Etc

## Element type 지정

- `Element`, `HTMLElement`, `HTMLParagraphElement` 나 `HTMLSpanElement`
- 왼쪽에서 오른쪽으로 갈수록 더 구체적인 타입이다.

```js
// 태그의 특정 속성에 접근 가능
const span: HTMLSpanElement = document.querySelector("#span") as HTMLSpanElement;
const paragraph = document.querySelector("#paragraph") as HTMLParagrahElement;
span.innerText = "span"
paragraph.innerText = "paragraph";
```

## Event type 지정

- `Event`, `UIEvent`, `MouseEvent` 나 `KeyboardEvent`
- 왼쪽에서 오른쪽으로 갈수록 더 구체적인 타입이다.
- 만약 `addEventListener` 호출 시 에러가 난다면 인자인 함수의 Event 타입을 더 상위 타입으로 변경해볼 것

## `instance of`

- 만약 여러 Event 나 Element 를 다루는 경우, `instance of <type>` 조건문으로 분기 처리

## innerText, textContent

- 오류 발생 시 값에 `.toString()` 추가

## DOM 유틸 함수와 type assertion

```ts
// 유틸 함수에서 타입 단언을 해주기
// default 값은 div 로 지정
const $ = <T extends HTMLElement = HTMLDivElement>(selector: string) => {
  return document.querySelector(selector) as T;
};

const divEle = $(".div-element");
const spanEle = $<HTMLSpanElement>(".span-element");
```
