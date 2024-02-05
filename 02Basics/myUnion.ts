let score: number | string = 33

score = 44
score = '44'

type User = {
  name: string
  id: number
}

type Admin = {
  username: string
  id: number
}

let htech: User | Admin = { name: 'john', id: 3332 }

htech = { username: 'ht', id: 5323 }

function getDbId(id: number | string) {
  console.log(`DB id is ${id}`)
  id === 'string' ? id.toLowerCase : id.toLocaleString()
}

getDbId(123)
getDbId('123')

// Array
const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3']
const data3: (string | number | boolean)[] = ['1', 2, true]

// let pi:3.14 = 3.14
// pi = 3.145

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'aisle'
// seatAllotment = 'crew'
