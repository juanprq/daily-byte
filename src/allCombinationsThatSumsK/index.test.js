const allCombinationsThatSumsK = require('./index');

describe('allCombinationsThatSumsK', () => {
  test('it should be a function', () => {
    expect(allCombinationsThatSumsK).toBeInstanceOf(Function);
  });

  test('it should return combinations', () => {
    const sample = [1, 1, 2, 3, 1];

    expect(allCombinationsThatSumsK(sample, 3))
      .toEqual([
        [3],
        [1, 2],
        [2, 1],
        [2, 1],
        [1, 1, 1],
      ]);
  });
});
