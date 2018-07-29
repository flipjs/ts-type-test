/**
 * Reverses the string.
 * @param string The string to reverse
 */
function reverse(arg: string): string

/**
 * Reverses the array.
 * @param array The array to reverse
 */
function reverse<T>(arg: T[]): T[]

function reverse(arg: string | any[]) {
  return Array.isArray(arg)
    ? arg.slice().reverse()
    : [...arg].reverse().join('');
}

const text = reverse('hello');
const numArray = reverse([1, 2, 3, 4]);
const strArray = reverse(['hell', 'world']);
