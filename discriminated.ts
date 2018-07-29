type Ok<T> = { success: true, value: T }
type Fail = { success: false, error: Error }

type Result<T> =
  | Ok<T>
  | Fail

function test<T>(foo: T): Result<T> {
  if (foo) {
    return { success: true, value: foo }
  }

  return { success: false, error: new Error('some error.') }
}
