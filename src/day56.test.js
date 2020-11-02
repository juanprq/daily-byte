const getPalindromeWords = require('./day56');

describe('getPalindromeWords', () => {
  test('it should be a function', () => {
    expect(getPalindromeWords).toBeInstanceOf(Function);
  });

  test('it should return palindrome words', () => {
    expect(getPalindromeWords('abcba'))
      .toEqual([
        'a',
        'b',
        'c',
        'b',
        'a',
        'a',
        'bcb',
        'a',
        'abcba',
      ]);
  });
});
