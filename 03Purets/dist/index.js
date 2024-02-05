"use strict";
// Class
// class User {
//   public email: string
//   name: string
//   private readonly city: string = 'Kampala'
//   constructor(email: string, name: string) {
//     ;(this.email = email), (this.name = name)
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = 'Kampala';
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course could should be more than 1');
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log('Token deleted');
    }
}
const htc = new User('htc@h.com', 'htc');
// htc.city = 'Nairobi'
// htc.deleteToken()
