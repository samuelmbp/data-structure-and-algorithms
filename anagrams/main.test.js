/* eslint-disable no-undef */
// test for the anagrams exercise.

const anagrams = require('./main');
describe('#anagrams', () => {
	test('function should exist', () => {
		expect(typeof anagrams).toEqual('function');
	});

	test('"hello" is an anagram of "llohe"', () => {
		expect(anagrams('hello', 'llohe')).toBeTruthy();
	});

	// test('"Whoa! Hi!" is an anagram of "Hi! Whoa!" ', () => {
	// 	expect(anagrams('Whoa! Hi!', 'Hi! Whoa')).toBeTruthy();
	// });
});
