// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
	let countVowels = 0;
	const checkVowels = ['a', 'e', 'i', 'o', 'u'];

	for (let char of str.toLowerCase()) {
		if (checkVowels.includes(char)) countVowels++;
	}

	return countVowels;
};

module.exports = vowels;
