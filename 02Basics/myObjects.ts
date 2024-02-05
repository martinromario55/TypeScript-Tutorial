const User = {
  name: 'hitech',
  email: 'hitech@lco.dev',
  isActive: true,
}

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: 'Martin', isPaid: false })

// Object returning an object
function createCourse(): { name: string; price: number } {
  return {
    name: 'React',
    price: 100,
  }
}

// Pass more information in the function
let newUser = { name: 'John', isPaid: false, email: 'john@jd.com' }
createUser(newUser)

// Type Aliases
type User = {
  name: string
  email: string
  isActive: boolean
}

function createTopUser(user: User) {}

createTopUser({ name: '', email: '', isActive: true })

export {}
