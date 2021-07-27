import { Animal } from "./Animal.js";

class Dog extends Animal{
    constructor(leg){
        super(leg);
    }
}
let dog = new Dog(3)
console.log(dog);