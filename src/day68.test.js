const findPaths = require('./day68');

describe('findPaths', () => {
  test('it should be a function', () => {
    expect(findPaths).toBeInstanceOf(Function);
  });

  test('it should return 2 for m = 2 and n = 2', () => {
    expect(findPaths(2, 2)).toEqual(2);
  });

  test('it should return 10 for m = 4 and n = 3', () => {
    expect(findPaths(4, 3)).toEqual(10);
  });
});
