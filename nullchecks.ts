function trimAndLower(str: string | null) {
  return str
    ? str.trim().toLowerCase()
    : str;
}

let foo = trimAndLower('Hello world!');
console.log(x);

foo = trimAndLower(null);
