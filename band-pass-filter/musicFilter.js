/**
 * Description:
 *
 * Write a band pass filter that has an input of 3 parameters:
 * - Sound wave: array of frequencies
 * - Lowest value allowed: is an integer
 * - Highest value allowed: integer
 *
 * Example Input -> Output:
 * [10, 45, 100, 1001], 40, 1000	 |		[40, 45, 100, 1000]
 * [10, 20, 50], 10, 50				   |		[10, 20, 50] (The exact output)
 * [10, 20, 50], 10, 40					 | 		[10, 20, 40]
 * [10, 20, 40], 20, 40					 |		[20, 20, 40]
 * [10, 20, 40], 15, 30					 |		[15, 20, 30]
 */

const musicFilter = (soundWave, lowestValue, highestValue) => {
	return soundWave;
};

module.exports = musicFilter;
