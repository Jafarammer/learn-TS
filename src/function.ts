function getName():string {
    return "Wan Jafar"
}
console.log(getName())

function getOld():number {
    return 26
}
console.log(getOld())

function noReturn():void{ // jika void menandakan function tidak memiliki balikan/return
    console.log("noReturn")
}
noReturn()

function freeType():any{
    return "Wan Jafar, Old " + 26 + ", Married," + false 
}
console.log(freeType())

// Tipe data pada argument
function multiplay(val1:number, val2:number):number{
    return val1 * val2;
}
const resulMultiplay = multiplay(10,5);
console.log(resulMultiplay)
function add(val1:number,val2:number):number{
    return val1 + val2
}
const resulAdd = add(10,10)
console.log(resulAdd)

// function as type
type Tambah = (val1:number, val2:number) => number;
const Add:Tambah =(val1,val2) => {
    return val1 + val2
}

const resultAddTambah = Add(15,10)
console.log(resultAddTambah)

// default param
const fullName = (firstName:string, lastName:string = "Alkaff"):string => {
    return firstName + " " + lastName
}
console.log(fullName("Jafar"))
console.log(fullName("Jafar","Ganteng"))

// optional param = optional param menggunakan ? setelah param contoh di param bhsSunda
const matPel = (mtk:string, bhsIgrs: string, bhsSunda?:string):string => {
    return mtk + " " + bhsIgrs + " " + bhsSunda
}
console.log(matPel("Matematika", "Bahasa inggris"))
console.log(matPel("Matematika", "Bahasa inggris", "Bahasa Sunda"))