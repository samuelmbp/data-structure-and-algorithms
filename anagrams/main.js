// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	/**
	 * 1. create 2 constants for stringA and stringB with regexp
	 * 2. create 2 empty objects to store the letter and the count
	 * 3. iterate over the regexp strings and add them to the objects
	 * 4. check if the count of obj keys are not equal and return false
	 * 5. iterate over one obj and compare each char to the other obj
	 */
	const wordOne = stringA.replace(/[^\w]/g, '').toLowerCase();
	const wordTwo = stringB.replace(/[^\w]/g, '').toLowerCase();

	const charsWordOne = {};
	const charsWordTwo = {};

	for (let char of wordOne) {
		if (!charsWordOne[char]) charsWordOne[char] = 1;
		else charsWordOne[char]++;
	}

	for (let char of wordTwo) {
		if (!charsWordTwo[char]) charsWordTwo[char] = 1;
		else charsWordTwo[char]++;
	}

	if (Object.keys(charsWordOne).length !== Object.keys(charsWordTwo).length) {
		return false;
	}

	for (let char in charsWordOne)
		return charsWordOne[char] === charsWordTwo[char];
}

console.log(anagrams('sam!!', 'ila'));

module.exports = anagrams;
