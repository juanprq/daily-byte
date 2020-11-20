const getLongestIncreasingSubsequence = require('./day74');

describe('getLongestIncreasingSubsequence', () => {
  test('it should be a function', () => {
    expect(getLongestIncreasingSubsequence).toBeInstanceOf(Function);
  });

  test('it should return 4', () => {
    const nums = [1, 9, 7, 4, 7, 13];

    expect(getLongestIncreasingSubsequence(nums)).toEqual(4);
  })
});
