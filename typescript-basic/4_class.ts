class Friend {
    // 변수 접근 및 변경 제한 키워드 사용 가능
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

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