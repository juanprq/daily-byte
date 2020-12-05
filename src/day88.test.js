const isSubsequence = require('./day88');

describe('isSubsequence', () => {
  test('it should be a function', () => {
    expect(isSubsequence).toBeInstanceOf(Function);
  });

  test('it should return true', () => {
    const s = 'abc';
    const t = 'aabbcc';

    expect(isSubsequence(s, t)).toBe(true);
  });

  test('it should return true', () => {
    const s = 'cpu';
    const t = 'computer';

    expect(isSubsequence(s, t)).toBe(true);
  });

  test('it should return false', () => {
    const s = 'xyz';
    const t = 'axbyc';

    expect(isSubsequence(s, t)).toBe(false);
  });
});
