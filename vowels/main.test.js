/* eslint-disable no-undef */
const vowels = require('./main');

describe('#vowels', () => {
	test('should contain the vowels function', () => {
		expect(typeof vowels).toEqual('function');
	});
});
