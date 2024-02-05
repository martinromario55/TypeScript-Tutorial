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
