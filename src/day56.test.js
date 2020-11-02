const getPalindromeWords = require('./day56');

describe('getPalindromeWords', () => {
  test('it should be a function', () => {
    expect(getPalindromeWords).toBeInstanceOf(Function);
  });

  test('it should return palindrome words', () => {
    expect(getPalindromeWords('abcba').sort())
      .toEqual([
        'a',
        'b',
        'c',
        'bcb',
        'abcba',
      ].sort());
  });
});
