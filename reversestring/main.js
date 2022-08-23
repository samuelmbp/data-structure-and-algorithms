// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// --- Solution #1
	// return str.split('').reverse().join('').trim();
	
	// --- Solution #2
	// let reversed = '';
	// for (let char of str) {
	// 	reversed = char + reversed; // Z-A
	// }
	// return reversed.trim();

	// --- Solution #3
	return str
		.split('')
		.reduce((prev, curr) => curr + prev, '')
		.trim();
}

console.log(reverse('undefined')); // denifednu
module.exports = reverse;