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
        this.city = 'Kampala';
    }
}
const htc = new User('htc@h.com', 'htc');
// htc.city = 'Nairobi'
