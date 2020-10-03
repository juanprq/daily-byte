const countGreaterElements = require('./day25');

describe('countGreaterElements', () => {
  test('should return "[-1, 3, 3]"', () => {
    const arrayA = [4, 1, 2];
    const arrayB = [1, 3, 4, 2];

    expect(countGreaterElements(arrayA, arrayB)).toEqual([-1, 3, 3]);
  });

  test('should return "[3, -1]"', () => {
    const arrayA = [2, 4];
    const arrayB = [1, 2, 3, 4];

    expect(countGreaterElements(arrayA, arrayB)).toEqual([3, -1]);
  });
});
