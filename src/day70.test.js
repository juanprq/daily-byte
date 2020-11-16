const getLongestCommonSubsequence = require('./day70');

describe('getLongestCommonSubsequence', () => {
  test('it should be a function', () => {
    expect(getLongestCommonSubsequence).toBeInstanceOf(Function);
  });

  test('it should return 3', () => {
    const a = 'xyz';
    const b = 'xyz';

    expect(getLongestCommonSubsequence(a, b)).toEqual(3);
  });

  test('it should return 3', () => {
    const a = 'abca';
    const b = 'acea';

    expect(getLongestCommonSubsequence(a, b)).toEqual(3);
  });

  test('it should return 0', () => {
    const a = 'abc';
    const b = 'def';

    expect(getLongestCommonSubsequence(a, b)).toEqual(0);
  })
});
