/* eslint-disable no-undef */
const reverseInt = require('./main');

describe('#reverseInt', () => {
	test('should exist', () => {
		expect(reverseInt).toBeDefined();
	});

	test('should handle 0 as an input', () => {
		expect(reverseInt(0)).toBe(0);
	});

	test('should flip a positive number', () => {
		expect(reverseInt(5)).toBe(5);
		expect(reverseInt(15)).toBe(51);
		expect(reverseInt(90)).toBe(9);
		expect(reverseInt(2359)).toBe(9532);
	});

	test('should flip a negative number', () => {
		expect(reverseInt(-5)).toBe(-5);
		expect(reverseInt(-15)).toBe(-51);
		expect(reverseInt(-90)).toBe(-9);
		expect(reverseInt(-2359)).toBe(-9532);
	});
});
