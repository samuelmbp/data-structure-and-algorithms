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
	// RegExp -> word.replace(/[^\w]/g, "").toLowerCase();
	// count the numbers of keys in str1 present in an obj {} and compare with numbers of keys in str2 obj {}
	// count the length of chars in an str obj? and compare to the length of the other str obj?
	return stringA.length === stringB.length;
}

module.exports = anagrams;
