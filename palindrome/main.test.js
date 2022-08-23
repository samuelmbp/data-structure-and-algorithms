/* eslint-disable no-undef */
const palindrome = require('./main');

test('palindrome function is defined', () => {
	expect(typeof palindrome).toEqual('function');
});

test('the word "aba" is a palindrome', () => {
	expect(palindrome('aba')).toBeTruthy();
});

test('the word " aba" with a space either at the beginning or at the end is not a palindrome', () => {
	expect(palindrome(' aba')).toBeFalsy();
});

test('the word "greetings" is not a palindrome', () => {
	expect(palindrome('greetings')).toBeFalsy();
});

test('1001 is a palindrome', () => {
	expect(palindrome('1001')).toBeTruthy();
});

test('the sentence "Fish hsif" is not a palindrome', () => {
	expect(palindrome('Fish hsif')).toBeFalsy();
});

test('the word "pennep" to be a palindrome', () => {
	expect(palindrome('pennep')).toBeTruthy();
});
