// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (string) => {
	/**
	 * 1. create an empty variable reversed
	 * 2. iterate over the original string and add each char in the reversed variable : z - a
	 * 3. use an if statement to compare the reversed variable with the original string
	 * 4. return true if these are the same
	 * 5. false if these are not the same
	 */
	let reversed = '';
	for (let char of string) {
		reversed = char + reversed;
	}

	if (reversed === string) {
		return true;
	} else {
		return false;
	}
};

palindrome('written');

module.exports = palindrome;
