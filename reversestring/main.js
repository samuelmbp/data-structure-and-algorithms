// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	const splitString = str.split('');
  const reverseString = splitString.reverse().join('');
	return reverseString.trim();
}

console.log(reverse('sam')); 

module.exports = reverse;
