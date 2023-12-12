# Etc

## Element type 지정

- `Element`, `HTMLElement`, `HTMLParagraphElement` 또는 `HTMLSpanElement`
- 왼쪽에서 오른쪽으로 갈수록 더 구체적인 타입이다.

```js
// 태그의 특정 속성에 접근 가능
const span: HTMLSpanElement = document.querySelector("#span") as HTMLSpanElement;
const paragraph = document.querySelector("#paragraph") as HTMLParagrahElement;
span.innerText = "span"
paragraph.innerText = "paragraph";
```
