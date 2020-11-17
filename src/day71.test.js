const getMaximumSum = require('./day71');

describe('getMaximumSum', () => {
  test('it should be a function', () => {
    expect(getMaximumSum).toBeInstanceOf(Function);
  });

  test('it should return 8', () => {
    const nums = [-3 ,8 ,-8 ,2];

    expect(getMaximumSum(nums)).toEqual(8);
  });

  test('it should return 5', () => {
    const nums = [2, 3,-4, 2];

    expect(getMaximumSum(nums)).toEqual(5);
  });

  test('it should return 8', () => {
    const nums = [1, 5,-2, -3, 7];

    expect(getMaximumSum(nums)).toEqual(8);
  });
});
