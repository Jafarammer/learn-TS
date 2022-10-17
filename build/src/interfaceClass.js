"use strict";
class Asus {
    constructor(brandLaptop, isGaming, isOffice) {
        this.brandLaptop = brandLaptop;
        this.isGaming = isGaming;
        this.isOffice = isOffice;
    }
    on() {
        console.log("Start power on");
    }
    off() {
        console.log('Start power off');
    }
}
const asus = new Asus('Asus', true, false);
console.log(asus.on());
// asus.brandLaptop = 'Asus'
console.log(asus.brandLaptop);
console.log(asus.isGaming);
console.log(asus.isOffice);
