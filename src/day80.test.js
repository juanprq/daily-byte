const getMissingNumber = require('./day80');

describe('getMissingNumber', () => {
  test('it should be a function', () => {
    expect(getMissingNumber).toBeInstanceOf(Function);
  });

  test('it should return 3', () => {
    const numbers = [1, 4, 2, 0];
    expect(getMissingNumber(numbers)).toEqual(3);
  });

  test('it should return 4', () => {
    const numbers = [6, 3, 1, 2, 0, 5];
    expect(getMissingNumber(numbers)).toEqual(4);
  });
});
