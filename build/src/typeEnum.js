"use strict";
// default enum
var monthDefault;
(function (monthDefault) {
    monthDefault[monthDefault["JAN"] = 0] = "JAN";
    monthDefault[monthDefault["FEB"] = 1] = "FEB";
    monthDefault[monthDefault["MAR"] = 2] = "MAR";
    monthDefault[monthDefault["APR"] = 3] = "APR";
    monthDefault[monthDefault["MEI"] = 4] = "MEI";
})(monthDefault || (monthDefault = {}));
console.log(monthDefault);
console.log(monthDefault.MAR);
// enum numeric
var monthNum;
(function (monthNum) {
    monthNum[monthNum["JAN"] = 1] = "JAN";
    monthNum[monthNum["FEB"] = 2] = "FEB";
    monthNum[monthNum["MAR"] = 3] = "MAR";
    monthNum[monthNum["APR"] = 4] = "APR";
    monthNum[monthNum["MEI"] = 5] = "MEI";
})(monthNum || (monthNum = {}));
console.log(monthNum);
console.log(monthNum.MAR);
// enum string
var monthStr;
(function (monthStr) {
    monthStr["JAN"] = "Januari";
    monthStr["FEB"] = "February";
    monthStr["MAR"] = "March";
    monthStr["APR"] = "April";
    monthStr["MEI"] = "Mei";
})(monthStr || (monthStr = {}));
console.log(monthStr);
console.log(monthStr.MAR);
