// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzBuzz = (number) => {
	/**
	 * 1. Is the number multiple of 3 and 5 ? return 'fizzbuzz'
	 * 2. Is the number multiple of 3? return 'fizz;
	 * 3. Is the number multiple of 5? return 'buzz'
	 * 4. If the number is not multiple of 3 or 5 return the number itself
	 */

	// Return
	if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';
	else if (number % 3 === 0) return 'fizz';
	else if (number % 5 === 0) return 'buzz';
	else return number;

	// Console.log
	// for (let num = 1; num <= number; num++) {
	// 	if (num % 3 === 0 && num % 5 === 0) console.log('fizzbuzz');
	// 	else if (num % 3 === 0) console.log('fizz');
	// 	else if (num % 5 === 0) console.log('buzz');
	// 	else console.log(num);
	// }
};

module.exports = fizzBuzz;
