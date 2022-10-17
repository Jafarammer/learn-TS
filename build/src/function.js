"use strict";
function getName() {
    return "Wan Jafar";
}
console.log(getName());
function getOld() {
    return 26;
}
console.log(getOld());
function noReturn() {
    console.log("noReturn");
}
noReturn();
function freeType() {
    return "Wan Jafar, Old " + 26 + ", Married," + false;
}
console.log(freeType());
// Tipe data pada argument
function multiplay(val1, val2) {
    return val1 * val2;
}
const resulMultiplay = multiplay(10, 5);
console.log(resulMultiplay);
function add(val1, val2) {
    return val1 + val2;
}
const resulAdd = add(10, 10);
console.log(resulAdd);
const Add = (val1, val2) => {
    return val1 + val2;
};
const resultAddTambah = Add(15, 10);
console.log(resultAddTambah);
// default param
const fullName = (firstName, lastName = "Alkaff") => {
    return firstName + " " + lastName;
};
console.log(fullName("Jafar"));
console.log(fullName("Jafar", "Ganteng"));
// optional param = optional param menggunakan ? setelah param contoh di param bhsSunda
const matPel = (mtk, bhsIgrs, bhsSunda) => {
    return mtk + " " + bhsIgrs + " " + bhsSunda;
};
console.log(matPel("Matematika", "Bahasa inggris"));
console.log(matPel("Matematika", "Bahasa inggris", "Bahasa Sunda"));
