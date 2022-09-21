/* eslint-disable no-undef */
const steps = require('./main');

describe('#steps', () => {
	test('steps is a function', async () => {
		expect(typeof steps).toEqual('function');
	});
});
