const getNumberOfIslands = require('./day89');

describe('getNumberOfIslands', () => {
  test('it should be a function', () => {
    expect(getNumberOfIslands).toBeInstanceOf(Function);
  });

  test('it should return 3', () => {
    const space = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 0, 1],
    ];

    expect(getNumberOfIslands(space)).toEqual(3);
  });

  test('it should return 4', () => {
    const space = [
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0],
    ];

    expect(getNumberOfIslands(space)).toEqual(4);
  });
});
