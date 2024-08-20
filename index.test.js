import { capitalize } from '.';
import { reverseString } from '.';
import { calc } from '.';

test('Capitalize the first letter', () => {
  expect(capitalize('dragon')).toBe('Dragon');
});

test('Reverse string', () => {
  expect(reverseString('League of Legends')).toBe('sdnegeL fo eugaeL');
});

test('Adding two numbers', () => {
  expect(calc.add(2, 2)).toEqual(4);
});

test('Subtracting two numbers', () => {
  expect(calc.subtract(3, 2)).toEqual(1);
});

test('Multiplying two numbers', () => {
  expect(calc.multiply(2, 2)).toEqual(4);
});
test('Dividing two numbers', () => {
  expect(calc.divide(6, 2)).toEqual(3);
});
