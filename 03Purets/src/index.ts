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
  protected _courseCount = 1

  private readonly city: string = 'Kampala'
  constructor(public email: string, public name: string) {}

  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error('Course could should be more than 1')
    }
    this._courseCount = courseNum
  }

  private deleteToken() {
    console.log('Token deleted')
  }
}

const htc = new User('htc@h.com', 'htc')
// htc.city = 'Nairobi'

// htc.deleteToken()

// Inheritance - Protected
class SubUser extends User {
  isFamily: boolean = true
  changeCourseCount() {
    this._courseCount = 2
  }
}
