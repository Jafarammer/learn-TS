"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Asus_1 = __importDefault(require("./Asus"));
const Macbook_1 = __importDefault(require("./Macbook"));
const asus = new Asus_1.default("Zenbook14", true, true);
console.log(asus);
const macbook = new Macbook_1.default(2018, false, false);
console.log(macbook);
macbook.a();
macbook.b();
