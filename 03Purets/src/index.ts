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
  private readonly city: string = 'Kampala'
  constructor(public email: string, public name: string) {}
}

const htc = new User('htc@h.com', 'htc')
// htc.city = 'Nairobi'
