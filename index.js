export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

function calculator() {
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const divide = (x, y) => x / y;
  const multiply = (x, y) => x * y;

  return { add, subtract, divide, multiply };
}

export const calc = calculator();

function analyzeArray(array) {
  const length = array.length;
  const max = Math.max(...array);
  const min = Math.min(...array);
  const average = array.reduce((a, b) => a + b, 0) / length;

  return { max, min, average, length };
}

export const analyze = analyzeArray([1, 8, 3, 4, 2, 6]);
