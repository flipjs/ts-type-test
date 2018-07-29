function add<T>(a: T, b: T): string {
  return `${a} ${b}`;
}

const x = add<number>(1, 2);
const y = add<string>('hello', 'world');

console.log(x);
console.log(y);

function testHint(arg: string | boolean): string {
  if (typeof arg === 'string') {
    arg
    return 'i am a string';
  }
  if (typeof arg === 'boolean') {
    arg
    return 'i am a number';
  }

  arg
  return 'lol, this will not happen!'
}

testHint('hello')
testHint(true)
