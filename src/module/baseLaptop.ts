import iLaptop from "./iLaptop";
import * as keyboard from './keyboard'

abstract class baseLaptop<T> implements iLaptop<T>{
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(name: string, type: T, numeric: boolean, toucButton: boolean){
        this.name = name
        this.type = type
        this.withNumeric = numeric
        this.withTouchButton = toucButton
    }

    a() : void{
        console.log(keyboard.a())
    }
    b():void{
        console.log(keyboard.b())
    }
    
}
export default baseLaptop