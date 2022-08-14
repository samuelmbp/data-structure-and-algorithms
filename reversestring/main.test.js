/* eslint-disable no-undef */
const reverse = require('./main');

test('Reverse function exists', () => {
	expect(reverse).toBeDefined();
});

test('Can reverse a string', () => {
	expect(reverse('abcd')).toEqual('dcba');
});

test('Can reverse a string with extra spaces', () => {
	expect(reverse(' sam')).toEqual('mas');
});
