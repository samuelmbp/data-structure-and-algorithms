/* eslint-disable no-undef */
const musicFilter = require('./musicFilter');

describe('#musicFilter', () => {
	test('should return the exact sound wave when lowest and highest are the same', () => {
		expect(musicFilter([10, 20, 50], 10, 50)).toEqual([10, 20, 50]);
	});

	test('should modify the highest value in the sound wave', () => {
		expect(musicFilter([10, 20, 50], 10, 40)).toEqual([10, 20, 40]);
	});
});
