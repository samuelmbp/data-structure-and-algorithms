// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = (number) => {
	for (let row = 0; row < number; row++) {
		let stair = '';

		for (let column = 0; column < number; column++) {
			if (column <= row) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}

		console.log(stair);
	}
};

steps(20);

module.exports = steps;
