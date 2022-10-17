"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    setName(value) {
        this.name = value;
    }
    setAge(value) {
        return this.age = value;
    }
}
exports.User = User;
const resultUser = new User("Jafar", 26);
console.log(resultUser);
console.log(resultUser.name);
console.log(resultUser.age);
/**
 * Note
 * public = Bisa diakses disemua class / dari luar class
 * protected = Hanya bisa diakses dari class tersebut, dan class turunannya
 * private = Hanya bisa di akses dari class itu sendiri
 */
// inheritance
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = 'email tidak valid';
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
// static method
Admin.getRoleName = "admin";
const admin = new Admin("025464", "Jafar", 26);
admin.setName("Trial");
admin.getRole();
admin.setAge(222);
admin.phone;
admin.email = "admin@gmail.com";
console.log(admin.email);
let adminStatic = Admin.getRoleName;
console.log(adminStatic);
