class Hello {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  render() {
    console.log(this.name);
  }
}

type Success = { success: true, value: string }
type ERR = { success: false, error: Error }

type XXX =
  | Success
  | Fail

const xxx: XXX = { success: true, value: 'Ok' }
const yyy: XXX = { success: false, error: new Error('sdfsd') }
