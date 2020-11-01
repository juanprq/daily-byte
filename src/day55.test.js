const generateUniqueCombinations = require('./day55');

describe('generateUniqueCombinations', () => {
  test('it should be a function', () => {
    expect(generateUniqueCombinations).toBeInstanceOf(Function);
  });

  test('it should genereate combinations for n = 6', () => {
    const numbers = [2, 4, 6, 3];
    const target = 6;

    expect(generateUniqueCombinations(numbers, target)).toEqual(
      [
        [2, 2, 2],
        [2, 4],
        [3, 3],
        [6],
      ],
    );
  });
});
