// type alias (타입 별칭)
type Person = {
    name: string;
    age: number;
}

// interface
// interface Person  {
//     name: string;
//     age: number;
// }

// interface : type 확장 가능
// type alias :  type 확장 불가능. 모든 속성의 type 을 툴팁으로 표시
// type 확장이 가능한 interface 사용 권장

const james: Person = {
    name: "james",
    age: 30,
}

type Greeting = string;
const hello: Greeting = "hello";

type Todo = {id: string; title: string; done: boolean}
function addTodo(todo: Todo) {
    // ...
}