"use strict";
// string
let myName;
myName = "Jafar";
// number
let old;
old = 26;
// boolean
let isMarried;
isMarried = true;
isMarried = false;
// any
let biodata;
biodata = "Jafar";
biodata = 26;
biodata = false;
biodata = [];
biodata = {};
// array
let fruit;
fruit = ['Jambu,Jeruk, Apel'];
let phoneNumber;
phoneNumber = [0, 8, 5, 7, 1, 8, 9, 7, 3, 7, 1, 0];
let myBiodata;
myBiodata = [
    {
        tes: "bisa objek"
    },
    "bisa string",
    9
];
// tupple = type data yg mirip array tapi isinya bisa di batasi contoh didalam array hanya boleh ada type data string dan number saja
let arrTupple;
arrTupple = ["String", 7878]; //jika di isi boolean akan error
// type union
let phone;
phone = 85718973710, // di type script angka awal nol tidak boleh , akan terjadi error
    console.log(phone);
phone = "085718973710";
console.log(phone);
