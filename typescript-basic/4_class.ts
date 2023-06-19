class ShopMember {
    // 변수 접근 및 변경 제한 키워드 사용 가능
    public nickname: string;
    readonly email: string;
    private _password: string;

    constructor(nickname: string, email: string, password: string) {
        this.nickname = nickname;
        this.email = email;
        this._password = password;
    }
    // accessor
    get password(): string { return this._password }
    set password( value: string ) { 
        if ( value && value.length < 6 ) throw new Error("password must be over 5 characters");
        this._password = value;
    }
}

// abstract class(추상 클래스)
abstract class Animal {
    // abstract 키워드: 상속 시 구현 강제
    abstract eating(): void;
    walking(): void { console.log("walking") }
}
// 상속
class Bird extends Animal {
    eating(): void { console.log("eating") }
    flying(): void { console.log("flying") }
}
// const parrot = new Animal(); // error
const parrot = new Bird();
parrot.walking();
parrot.eating();
parrot.flying();

/*
extends: 
상속, 확장
class => class 에 사용
constructor 내에서 this 에 접근하려면 super 키워드를 사용해야 한다.
*/

/*
implements: 
재정의, 구체화 (override 필요)
interface => class 에 사용
*/

/*
// prototype(ES5)
function Friend(name, age) {
    this.name = name;
    this.age = age;
}
const polly = new Friend("Polly", 100);
console.log(polly);

// class(ES6)
class Friend {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const polly = new Friend("Polly", 100);
console.log(polly);
*/