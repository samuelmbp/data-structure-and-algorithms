/* eslint-disable no-undef */
const musicFilter = require('./musicFilter');

describe('#musicFilter', () => {
	test('should return the exact sound wave when lowest and highest are the same', () => {
		expect(musicFilter([10, 20, 50], 10, 50)).toEqual([10, 20, 50]);
	});

	test('should modify the highest value in the sound wave array', () => {
		expect(musicFilter([10, 30, 50], 10, 40)).toEqual([10, 30, 40]);
	});

	test('should modify the lowest value in the sound wave array', () => {
		expect(musicFilter([10, 20, 40], 20, 40)).toEqual([20, 20, 40]);
	});

	test('should modify both the lowest and the highest values in the sound wave array', () => {
		expect(musicFilter([10, 25, 40], 15, 30)).toEqual([15, 25, 30]);
	});

	test('should return [15, 20, 30, 40, 100] when input is [10, 20, 30, 40, 100, 250], 10, 100', () => {
		expect(musicFilter([10, 20, 30, 40, 90, 250], 15, 100)).toEqual([
			15, 20, 30, 40, 90, 100,
		]);
	});
});
