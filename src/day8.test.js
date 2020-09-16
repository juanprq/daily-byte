const twoSum = require('./day8');

describe('twoSum', () => {
  test('should return true', () => {
    const array = [1, 3, 8, 2];
    const k = 10;
    expect(twoSum(array, k)).toBe(true);
  });

  test('should return false', () => {
    const array = [3, 9, 13, 7];
    const k = 8;
    expect(twoSum(array, k)).toBe(false);
  });

  test('should return true', () => {
    const array = [4, 2, 6, 5, 2];
    const k = 4;
    expect(twoSum(array, k)).toBe(true);
  });
});
