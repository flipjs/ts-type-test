type Res<T> =
  | { success: true, value: T }
  | { success: false, error: Error }

function getResult<T>(arg: T): Res<T> {
  if (!arg) {
    return {
      success: false,
      error: new Error('err')
    }
  }

  return {
    success: true,
    value: arg
  };
}

const ok = getResult('hello');
const ok2 = getResult(10);
const err = getResult('');
