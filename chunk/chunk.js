// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// const chunk = (array, size) => {
// 	/**
// 	 * 1. Have an empty dimensionalArr to hold the new arrays with their values
// 	 * 2. Iterate over the array
// 	 * 3. Retrieve the last element of the dimensionalArr // undefined
// 	 * 4. If the last element does not exist, or if it's length is equal to the size
// 	 * 5. Push a new arr into the dimensionalArr with the current element
// 	 * 6. Else add the current element to the last element
// 	 */

// 	const dimensionalArr = [];

// 	for (let element of array) {
// 		const lastElement = dimensionalArr[dimensionalArr.length - 1];

// 		// Turnery Operator
// 		!lastElement || lastElement.length === size
// 			? dimensionalArr.push([element])
// 			: lastElement.push(element);
// 	}

// 	return dimensionalArr;
// };

const chunk = (array, size) => {
	/**
	 * 1. Create an empty arr
	 * 2. Create an index that starts at 0
	 * 3. While 'index' is less than array.length
	 * 4. Push a slice of the length 'size' from 'array' into 'dimensionalArr'
	 * 5. Add 'size' to 'index'
	 */

	const dimensionalArr = [];
	let index = 0;

	while (index < array.length) {
		dimensionalArr.push(array.slice(index, index + size));
		index += size;
	}
	return dimensionalArr;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
module.exports = chunk;
