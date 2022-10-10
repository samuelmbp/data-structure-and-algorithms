/* eslint-disable no-undef */
const fibonacci = require('./main');

describe('#fibonacci', () => {
	test('fibonacci function should be defined', () => {
		expect(typeof fibonacci).toEqual('function');
	});
});