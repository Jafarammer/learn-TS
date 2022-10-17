class List<T>{ //tidak harus <T> bebas mau apapun penamaannya
    private data: T[];
    constructor(...elements: T[]){
        this.data = elements
    }

    add(element: T):void{
        this.data.push(element)
    }
    addMultiple(...elements: T[]):void{
        this.data.push(...elements)
    }

    getAll():T[]{
        return this.data
    }
}

const numbers = new List<number>(1,2,3,4)
const fruits = new List<string>("Apple","Penaple", "Avocado")
numbers.add(5)
numbers.addMultiple(6,7,8)
console.log(numbers.getAll())
fruits.add("Orange")
fruits.addMultiple("Guava","Grape","Water melom")
console.log(fruits.getAll())
const random = new List<number | string>(1,"abc",2,"tes random")
random.add(5)
random.add("tes1")
random.addMultiple(6,7,"tes2")
console.log(random.getAll())