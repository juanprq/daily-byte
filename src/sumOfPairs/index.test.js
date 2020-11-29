const sumOfPairs = require('./index');

describe('sumOfPairs', () => {
  test('it should be a function', () => {
    expect(sumOfPairs).toBeInstanceOf(Function);
  });

  test('it should return 4, 4', () => {
    const array = [1, 2, 4, 4, 5];

    expect(sumOfPairs(array, 8)).toEqual([4, 4]);
  });
});
