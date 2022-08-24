// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (number) => {
	/**
	 * 1. use toString on the number to make it a string
	 * 2. reverse the string(number) with split, reverse and join
	 * 3. use parseInt() to make the string a number
	 * 4. use Math.sign() to check if the number is negative or positive
	 * 5. Multiply the result of Math.sign() to the reversed number
	 */
	const numberToStringReverse = number.toString().split('').reverse().join('');
	// Solution #1
	return parseInt(numberToStringReverse) * Math.sign(number);

	// Solution #2
	// return number < 0
	// 	? parseInt(numberToStringReverse) * -1
	// 	: parseInt(numberToStringReverse);
};

module.exports = reverseInt;
