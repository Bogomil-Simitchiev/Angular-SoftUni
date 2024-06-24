import { ValidationClass } from "./validator";

namespace Examples {
    export let number: number = 1;
    export class Person {
        constructor(protected name: string, protected age: number) {
            this.name = name;
            this.age = age
        }
        information(): void {
            console.log(`${this.name} is ${this.age}`);


        }

    }
    export class Employee extends Person {
        constructor(name, age, private work: string) {
            super(name, age);
        }
        tellWork(): void {
            console.log(`${this.work} is done by ${this.name}, who is ${this.age}`);

        }
    }

}

const marian = new Examples.Person('Marian', 12);
const evgenii = new Examples.Employee('Evgenii', 12, 'chiniite da se izmiqt');
console.log(Examples.number);
marian.information();
evgenii.tellWork();

const set = new Set<number>();
set.add(1);
set.add(2);
set.add(1);

console.log(set);

interface IKeyValuePair<T, Y> {
    key: T,
    value: Y,
    someMethod(key: string, value: number)
}

const telephoneNumber: IKeyValuePair<string, number> = {
    key: 'iphone 15 pro', value: 124125,
    someMethod(key, value) {
        console.log(key);
        console.log(value);

    },
};
// telephoneNumber.key = 'iphone 14 pro';

console.log(telephoneNumber.key);
telephoneNumber.someMethod(telephoneNumber.key, telephoneNumber.value);

ValidationClass.validate('assafsa');
