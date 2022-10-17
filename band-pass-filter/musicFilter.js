/**
 * Description:
 *
 * Write a band pass filter that has an input of 3 parameters:
 * - Sound wave: array of frequencies
 * - Lowest value allowed: is an integer
 * - Highest value allowed: integer
 *
 * Example Input: 											-> Output:
 * [10, 45, 100, 1001], 40, 1000 |		[40, 45, 100, 1000]
 * [10, 20, 50], 10, 50				   |		[10, 20, 50] -> The exact output - original)
 * [10, 20, 50], 10, 40					 | 		[10, 20, 40] -> Modifies the highest
 * [10, 20, 40], 20, 40					 |		[20, 20, 40] -> Modifies the lowest
 * [10, 20, 40], 15, 30					 |		[15, 20, 30] -> Modifies both
 * [], 25, 50										 |		RAISE AN ERROR 'Please provide the frequencies.'
 * [20, 35, 45, 105, 900, 1100], , |		Default values for the lowest and highest of 40 and 1000
 *
 * Edge Case:
 * -> No sound wave
 * -> Array is empty raise an error
 * -> Provide default values for the lowest and highest arguments
 */

const musicFilter = (soundWave, lowestValue = 40, highestValue = 1000) => {
	/**
	 * Check if the soundWave contains any value higher than the highest value and modify it
	 * Check if the soundWave contains any values lower than the lowestValue amd modify it
	 */
	if (soundWave === []) throw new Error('Please provide the frequencies.');

	const modifiedSoundWave = [];

	for (let frequency of soundWave) {
		if (frequency > highestValue) modifiedSoundWave.push(highestValue);
		else if (frequency < lowestValue) modifiedSoundWave.push(lowestValue);
		else modifiedSoundWave.push(frequency);
	}

	return modifiedSoundWave;
};

console.log(musicFilter([10, 20, 40], 15, 30)); // [15, 20, 30]

module.exports = musicFilter;
