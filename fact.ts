function factorial(x: number): number {
  if (x === 1) return x
  return x * factorial(x-1)
}

const result = factorial(4)
console.log(result)
