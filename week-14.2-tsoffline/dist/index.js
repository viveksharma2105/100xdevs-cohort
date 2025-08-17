"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumofAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofAge({ name: 'v', age: 21 }, { name: 'g', age: 20 });
console.log(age);
