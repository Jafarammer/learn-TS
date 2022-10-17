"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
const numbers = new List(1, 2, 3, 4);
const fruits = new List("Apple", "Penaple", "Avocado");
numbers.add(5);
numbers.addMultiple(6, 7, 8);
console.log(numbers.getAll());
fruits.add("Orange");
fruits.addMultiple("Guava", "Grape", "Water melom");
console.log(fruits.getAll());
const random = new List(1, "abc", 2, "tes random");
random.add(5);
random.add("tes1");
random.addMultiple(6, 7, "tes2");
console.log(random.getAll());
