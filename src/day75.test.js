const paintHouses = require('./day75');

describe('paintHouses', () => {
  test('it should be a function', () => {
    expect(paintHouses).toBeInstanceOf(Function);
  });

  test('it should return 8', () => {
    // index 0 = red, index 1 = blue, index 2 = green
    const costs = [
      [1, 3, 5], // costs of house 1
      [2, 4, 6], // costs of house 2
      [5, 4, 3], // costs of house 3
    ];
    expect(paintHouses(costs)).toEqual(8);
  });
});
