/* eslint-disable no-undef */
const capitalise = require('./main');

describe('#capitalise', () => {
	test('should be a function', () => {
		expect(typeof capitalise).toEqual('function');
	});

	test('should capitalise the first letter of every word in a sentence', () => {
		expect(capitalise('hi there, how is it going?')).toEqual(
			'Hi There, How Is It Going?'
		);
	});

	test('should capitalise the first letter', () => {
		expect(capitalise('i love breakfast')).toEqual('I Love Breakfast');
	});
});
