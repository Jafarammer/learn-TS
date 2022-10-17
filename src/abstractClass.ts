abstract class Vehicle {
    abstract wheels: number;
    start():void{
        console.log('bruuuummm')
    }
}

class Car extends Vehicle{
    wheels: number = 4;
}
const car = new Car()
console.log(car.wheels)
car.start()

class MotorCycle extends Vehicle{
    wheels: number = 2;
}
const moto = new MotorCycle()
console.log(moto.wheels)
moto.start()