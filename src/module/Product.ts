import Asus from "./Asus";
import Macbook from "./Macbook";

const asus = new Asus("Zenbook14", true,true)
console.log(asus)
const macbook = new Macbook(2018, false, false)
console.log(macbook)
macbook.a()
macbook.b()