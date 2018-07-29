interface Person {
  name: string,
  age: number,
  interests: string[]
}

const person: Person = {
  name: 'Foo',
  age: 22,
  interests: ['pool', 'darts']
}

function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const name = prop(person, 'name')
const age = prop(person, 'age')
const interests = prop(person, 'interests')
