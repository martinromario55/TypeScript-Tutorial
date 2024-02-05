function detectType(val: number | string) {
  if (typeof val === 'number') {
    return 'number'
  } else if (typeof val === 'string') {
    return 'string'
  }
}

function provideId(id: string | null) {
  if (!id) {
    console.log('Please provide ID')
    return
  }
  id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s)
      }
    } else if (typeof strs === 'string') {
      console.log(strs)
    }
  }
}

interface UserTwo {
  name: string
  email: string
}

interface Admin {
  name: string
  email: string
  isAdmin: boolean
}

function isAdminAcc(acccount: UserTwo | Admin) {
  if ('isAdmin' in acccount) {
    return acccount.isAdmin
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString())
  } else {
    console.log(x.toUpperCase())
  }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet
    return 'fish food'
  } else {
    pet
    return 'bird food'
  }
}
