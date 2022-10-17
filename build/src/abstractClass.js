"use strict";
class Vehicle {
    start() {
        console.log('bruuuummm');
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
const car = new Car();
console.log(car.wheels);
car.start();
class MotorCycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
const moto = new MotorCycle();
console.log(moto.wheels);
moto.start();
