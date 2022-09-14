// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalise = (str) => {
	/**
	 * 1. Make the string an arr of individual words
	 * 2. Iterate over the array and for each word take the first letter an make it uppercase
	 * 3. Call slice(1) to receive the rest of the string apart from the first character
	 * 4. Join the array as a string
	 */

	let capitalisedString = [];
	for (let word of str.split(' ')) {
		capitalisedString.push(
			word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		);
	}
	return capitalisedString.join(' ');
};

module.exports = capitalise;
