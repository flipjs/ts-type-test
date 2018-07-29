type Okk<T> = [
  'ok',
  T
];

type Err = [
  'error'
]

type OkErr<T> = Okk<T> | Err

function getValue<T>(value: T): OkErr<T> {
  if (value) {
    return ['ok', value]
  }
  return ['error']
}

console.log(getValue('hello'))
console.log(getValue(123))
console.log(getValue(''))
