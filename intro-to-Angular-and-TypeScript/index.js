"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("./validator");
var Examples;
(function (Examples) {
    Examples.number = 1;
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.name = name;
            this.age = age;
        }
        information() {
            console.log(`${this.name} is ${this.age}`);
        }
    }
    Examples.Person = Person;
    class Employee extends Person {
        constructor(name, age, work) {
            super(name, age);
            this.work = work;
        }
        tellWork() {
            console.log(`${this.work} is done by ${this.name}, who is ${this.age}`);
        }
    }
    Examples.Employee = Employee;
})(Examples || (Examples = {}));
const marian = new Examples.Person('Marian', 12);
const evgenii = new Examples.Employee('Evgenii', 12, 'chiniite da se izmiqt');
console.log(Examples.number);
marian.information();
evgenii.tellWork();
const set = new Set();
set.add(1);
set.add(2);
set.add(1);
console.log(set);
const telephoneNumber = {
    key: 'iphone 15 pro', value: 124125,
    someMethod(key, value) {
        console.log(key);
        console.log(value);
    },
};
// telephoneNumber.key = 'iphone 14 pro';
console.log(telephoneNumber.key);
telephoneNumber.someMethod(telephoneNumber.key, telephoneNumber.value);
validator_1.ValidationClass.validate('assafsa');
