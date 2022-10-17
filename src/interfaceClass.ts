interface Laptop{
    brandLaptop: string;
    on():void;
    off():void;
}

class Asus implements Laptop{
    brandLaptop: string;
    isGaming: boolean;
    isOffice: boolean

    constructor(brandLaptop: string, isGaming: boolean, isOffice: boolean){
        this.brandLaptop = brandLaptop
        this.isGaming = isGaming
        this.isOffice = isOffice
    }

    on(): void {
        console.log("Start power on")
    }
    off(): void {
        console.log('Start power off')
    }
}

const asus = new Asus('Asus', true, false);
console.log(asus.on())
// asus.brandLaptop = 'Asus'
console.log(asus.brandLaptop)
console.log(asus.isGaming)
console.log(asus.isOffice)

