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

export function caesarCipher(string, key) {
  const lowercase = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  const uppercase = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const stringArray = string.split('');

  stringArray.forEach((char, index) => {
    const findIndex1 = lowercase.indexOf(char);
    const findIndex2 = uppercase.indexOf(char);

    if (findIndex1 !== -1) {
      const charIndex = (findIndex1 + key) % 26;
      stringArray[index] = lowercase[charIndex];
    } else if (findIndex2 !== -1) {
      const charIndex = (findIndex2 + key) % 26;
      stringArray[index] = uppercase[charIndex];
    }
  });

  const encryptedString = stringArray.join('');
  return encryptedString;
}
