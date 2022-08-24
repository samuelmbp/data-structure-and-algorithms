/* eslint-disable no-undef */
const fizzBuzz = require('./fizzbuzz');

describe('#fizzBuzz', () => {
	test('should be defined', () => {
		expect(fizzBuzz).toBeDefined();
	});

	test('should return "fizz" when the number is divisible by 3', () => {
		expect(fizzBuzz(3)).toBe('fizz');
		expect(fizzBuzz(12)).toBe('fizz');
	});

	test('should return "buzz" when the number is divisible by 5', () => {
		expect(fizzBuzz(5)).toBe('buzz');
		expect(fizzBuzz(20)).toBe('buzz');
	});

	test('should return "fizzbuzz" when the number is divisible by both: 3 and 5', () => {
		expect(fizzBuzz(15)).toBe('fizzbuzz');
		expect(fizzBuzz(30)).toBe('fizzbuzz');
	});
});