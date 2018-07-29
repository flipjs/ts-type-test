type Add<T> = (a: T, b: T) => T | null;

const sum: Add<number|string> = (a, b) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return null;
}

const xx = sum(1, 2);
const yy = sum('hello', 'world');
console.log(x);
