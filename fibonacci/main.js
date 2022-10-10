// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibonacci(number) {
	const result = [0, 1];

	for (let n = 2; n <= number; n++) {
		result[n] = result[n - 2] + result[n - 1];
	}

	return result[result.length - 1];
}

module.exports = fibonacci;
