// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
	let vowelsCount = 0;
	for (let char of str) {
		if (
			char === 'a' ||
			char === 'e' ||
			char === 'i' ||
			char === 'o' ||
			char === 'u'
		) {
			vowelsCount++;
		}
	}

	return vowelsCount;
};

module.exports = vowels;
