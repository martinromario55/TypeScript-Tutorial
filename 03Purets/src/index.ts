// Class
class User {
  email: string
  name: string
  city: string = ''
  constructor(email: string, name: string) {
    ;(this.email = email), (this.name = name)
  }
}

const htc = new User('htc@h.com', 'htc')
htc.city = 'Nairobi'
