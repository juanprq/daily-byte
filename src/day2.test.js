const isPalindrome = require('./day2');

describe('isPalindrome', () => {
  test('"level" returns true', () => {
    expect(isPalindrome('level')).toBe(true);
  });

  test('"algorithm" returns false', () => {
    expect(isPalindrome('algorithm')).toBe(false);
  });

  test('"A man, a plan, a canal: Panama." returns true', () => {
    const string = 'A man, a plan, a canal: Panama.';
    expect(isPalindrome(string)).toBe(true);
  })
});
