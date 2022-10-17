export class User {
    constructor(public name: string, public age: number){
        this.name = name
        this.age = age
    }
    setName(value: string): void{
        this.name = value
    }
    setAge(value: number): number{
        return this.age = value
    }
}

const resultUser = new User("Jafar", 26)
console.log(resultUser)
console.log(resultUser.name)
console.log(resultUser.age)
/**
 * Note
 * public = Bisa diakses disemua class / dari luar class
 * protected = Hanya bisa diakses dari class tersebut, dan class turunannya
 * private = Hanya bisa di akses dari class itu sendiri
 */

// inheritance
class Admin extends User{
    read: boolean = true
    write: boolean = true
    phone: string;
    private _email:string = ""
    // static method
    static getRoleName:string = "admin"

    constructor(phone: string, name: string, age: number){
        super(name,age)
        this.phone = phone
    }

    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        }
    }

    set email(value: string){
        if(value.length < 5){
            this._email = 'email tidak valid'
        } else{

            this._email = value
        }
    }

    get email():string{
        return this._email
    }

}

const admin = new Admin("025464","Jafar", 26)
admin.setName("Trial")
admin.getRole();
admin.setAge(222)
admin.phone;
admin.email = "admin@gmail.com"
console.log(admin.email)

let adminStatic = Admin.getRoleName;
console.log(adminStatic)