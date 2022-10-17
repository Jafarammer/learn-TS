// string
let myName: string;
myName = "Jafar";
// number
let old: number;
old = 26;
// boolean
let isMarried: boolean;
isMarried = true;
isMarried = false;
// any
let biodata: any;
biodata = "Jafar"
biodata = 26
biodata = false
biodata = []
biodata = {}
// array
let fruit:string[];
fruit = ['Jambu,Jeruk, Apel'];
let phoneNumber: number[];
phoneNumber = [0,8,5,7,1,8,9,7,3,7,1,0]
let myBiodata: any[];
myBiodata = [
    {
        tes: "bisa objek"
    },
    "bisa string",
    9
]
// tupple = type data yg mirip array tapi isinya bisa di batasi contoh didalam array hanya boleh ada type data string dan number saja
let arrTupple: [string,number];
arrTupple = ["String", 7878]; //jika di isi boolean akan error

// type union
let phone: string | number;
phone = 85718973710,// di type script angka awal nol tidak boleh , akan terjadi error
console.log(phone)
phone = "085718973710"
console.log(phone)