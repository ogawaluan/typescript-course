abstract class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old`)
    }
}

class CharAccount extends UserAccount {
    readonly nickname: string;
    private level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log("-------GET-------")
        return this.level
    }

    set setLevel(level: number) {
        this.level = level
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`)
    }
}

// const will = new UserAccount("Willian", 30);
// console.log(will);
// console.log(will.age);
// will.logDetails();

const john = new CharAccount("John", 45, "Johnzin", 100);
john.setLevel = 499
john.logDetails();
console.log(john)
console.log(john.getLevel)