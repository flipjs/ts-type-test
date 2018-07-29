function isString(arg: string|number|null|undefined): arg is string {
  return typeof arg === 'string';
}

const str = 'string';

if (isString(str)) {
  str; // use editor's hint function to inspect value
  console.log('is string');
} else {
  str;
  str; // use editor's hint function to inspect value
  console.log('is NOT a string');
}
