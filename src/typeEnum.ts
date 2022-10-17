// default enum
enum monthDefault {
    JAN,
    FEB,
    MAR,
    APR,
    MEI
}
console.log(monthDefault)
console.log(monthDefault.MAR)
// enum numeric
enum monthNum {
    JAN = 1,//jika di console enum numerik nilai awalnya 1
    FEB,
    MAR,
    APR,
    MEI
}
console.log(monthNum)
console.log(monthNum.MAR)
// enum string
enum monthStr {
    JAN = "Januari",
    FEB = "February",
    MAR = "March",
    APR = "April",
    MEI = "Mei"
}
console.log(monthStr)
console.log(monthStr.MAR
    )