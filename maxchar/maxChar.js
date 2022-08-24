// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (word) => {
	/**
	 * 1. create an empty obj
	 * 2. loop over string
	 * 3. check to see if the letter is already in the obj if not add it
	 * 4. use object.keys and reduce to check the idx of each value
	 * 5. return the most common string
	 */
	const chars = {};

	for (const char of word) {
		if (!chars[char]) chars[char] = 1;
		else chars[char]++;
	}

	const mostCommonChar = Object.keys(chars).reduce((prev, curr) => {
		if (chars[prev] > chars[curr]) {
			return prev;
		} else {
			return curr;
		}
	});

	return mostCommonChar;
};

maxChar('aabbcccc'); // c

module.exports = maxChar;
