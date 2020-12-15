const minimizePath = require('./day94');

describe('minimizePath', () => {
  test('it should be a function', () => {
    expect(minimizePath).toBeInstanceOf(Function);
  });

  test('it should return 7', () => {
    const grid = [
      [1, 1, 3],
      [2, 3, 1],
      [4, 6, 1],
    ];

    expect(minimizePath(grid)).toEqual(7);
  });
});
