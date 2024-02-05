function addTwo(num: number): number {
  return num + 2
  //   return 'hello'
}

function getUpper(val: string) {
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  console.log(name, email, isPaid)
}
// Default input
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  console.log(name, email, isPaid)
}

addTwo(5)
getUpper('himartin')
signUpUser('Martin', '<EMAIL>', true)
loginUser('Martin', '<EMAIL>')

// function getValue(myVal: number): boolean {
//   if (myVal > 10) {
//     return true
//   } else {
//     return false
//   }
// }

const getHello = (s: string): string => {
  return ''
}

const heros = ['thor', 'spiderman', 'ironman']
// const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
  console.log(errmsg)
}

function handleError(errmsg: string): never {
  throw new Error(errmsg)
}

export {}
