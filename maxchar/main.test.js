/* eslint-disable no-undef */
const maxChar = require('./maxChar');

describe('#maxChar', () => {
	test('should exist', () => {
		expect(typeof maxChar).toEqual('function');
	});

	test('should find the most frequent used character in the string', () => {
		expect(maxChar('a')).toEqual('a');
		expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
	});

	test('should work with numbers in a string', () => {
		expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
	});
});
