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
