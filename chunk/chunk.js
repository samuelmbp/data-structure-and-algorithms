// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
	/**
	 * 1. Have an empty dimensionalArr to hold the new arrays with their values
	 * 2. Iterate over the array
	 * 3. Retrieve the last element of the dimensionalArr // undefined
	 * 4. If the last element does not exist, or if it's length is equal to the size
	 * 5. Push a new arr into the dimensionalArr with the current element
	 * 6. Else add the current element to the last element
	 */

	const dimensionalArr = [];

	for (let element of array) {
		const lastElement = dimensionalArr[dimensionalArr.length - 1];
		if (!lastElement || lastElement.length === size) {
			dimensionalArr.push([element]);
		} else {
			lastElement.push(element);
		}
	}

	return dimensionalArr;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
module.exports = chunk;
