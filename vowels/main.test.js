/* eslint-disable no-undef */
const vowels = require('./main');

describe('#vowels', () => {
	test('should contain the vowels function', () => {
		expect(typeof vowels).toEqual('function');
	});

	test('should return the number of vowels used', () => {
		expect(vowels('aeiou')).toBe(5);
	});

	test('should return the number of vowels used', () => {
		expect(vowels('abcdefg')).toBe(2);
	});

	test('should return the number of vowels used', () => {
		expect(vowels('bcd')).toBe(0);
	});
});
