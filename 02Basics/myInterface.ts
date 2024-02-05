interface UserInt {
  readonly dbId: number
  email: string
  userId: number
  googleId?: string
  //   startTrail: () => string
  startTrail(): string
  getCoupon(couponname: string, value: number): number
}

const htuser: UserInt = {
  dbId: 22,
  email: 'h@h.com',
  userId: 224423,
  startTrail: () => 'trial started',
  getCoupon(couponname: string, off: 10): number {
    return 10
  },
}

htuser.email = 'h@htc.com'
// htuser.dbId = 224423
