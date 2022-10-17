
type Biodata = {
    name: String,
    umur: number,
    isMarried: boolean,
    tglLahir: Date
};
// key pada variabel di bawah ini harus samsa dengan type Biodata di atas
let myData: Biodata = {
    name: "Wan Jafar",
    umur: 26,
    isMarried: false,
    tglLahir: new Date('1996-06-19')
};
console.log(myData)