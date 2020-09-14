const isRemoveOnePalindrome = require('./day7');

describe('isRemoveOnePalindrome', () => {
  test('"abcba" should return true', () => {
    string = 'abcba';
    expect(isRemoveOnePalindrome(string)).toBe(true);
  });

  test('"foobof" should return true', () => {
    string = 'foobof';
    expect(isRemoveOnePalindrome(string)).toBe(true);
  });

  test('"abccab" should return false', () => {
    string = 'abccab';
    expect(isRemoveOnePalindrome(string)).toBe(false);
  });
});
