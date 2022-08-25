/* eslint-disable no-undef */
const fizzBuzz = require('./fizzbuzz');

describe('#fizzBuzz', () => {
	test('should be defined', () => {
		expect(fizzBuzz).toBeDefined();
	});

	test('should return "fizz" when the number is divisible by 3', () => {
		expect(fizzBuzz(3)).toBe('fizz');
		expect(fizzBuzz(12)).toBe('fizz');
		expect(fizzBuzz(27)).toBe('fizz');
	});

	test('should return "buzz" when the number is divisible by 5', () => {
		expect(fizzBuzz(5)).toBe('buzz');
		expect(fizzBuzz(20)).toBe('buzz');
		expect(fizzBuzz(70)).toBe('buzz');
	});

	test('should return "fizzbuzz" when the number is divisible by both: 3 and 5', () => {
		expect(fizzBuzz(15)).toBe('fizzbuzz');
		expect(fizzBuzz(30)).toBe('fizzbuzz');
		expect(fizzBuzz(90)).toBe('fizzbuzz');
	});

	test('should return the number itself when is not divisible by 3 or 5', () => {
		expect(fizzBuzz(4)).toBe(4);
		expect(fizzBuzz(7)).toBe(7);
	});
});
