/* eslint-disable no-undef */
const fibonacci = require('./main');

describe('#fibonacci', () => {
	test('fibonacci function should be defined', () => {
		expect(typeof fibonacci).toEqual('function');
	});

	test('should calculate correct fibonacci value for 1', () => {
		expect(fibonacci(1)).toBe(1);
	});

	test('should calculate correct fibonacci value for 2', () => {
		expect(fibonacci(2)).toBe(1);
	});

	test('should calculate correct fibonacci value for 3', () => {
		expect(fibonacci(3)).toBe(2);
	});

	test('should calculate correct fibonacci value for 4', () => {
		expect(fibonacci(4)).toBe(3);
	});

	test('should calculate correct fibonacci value for 39', () => {
		expect(fibonacci(39)).toBe(63245986);
	});
});
