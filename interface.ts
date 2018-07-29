interface FuncType {
  // syntax looks weird to me
  // maybe it takes a little more time to get used to it
  (arg: string): boolean
}

// I prefer the type syntax
// type FuncType = (a: string) => boolean

const testFunc: FuncType = (name) => {
  return !!name
}

testFunc('Bob')
