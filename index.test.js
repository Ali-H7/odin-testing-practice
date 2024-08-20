import { capitalize } from '.';
import { reverseString } from '.';
import { calc } from '.';
import { analyze } from '.';

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

test('Analyze average', () => {
  expect(analyze.average).toEqual(4);
});

test('Analyze min', () => {
  expect(analyze.min).toEqual(1);
});

test('Analyze max', () => {
  expect(analyze.max).toEqual(8);
});

test('Analyze length', () => {
  expect(analyze.length).toEqual(6);
});
