const maximizeBricks = require('./day63');

describe('maximizeBricks', () => {
  test('it should be a function', () => {
    expect(maximizeBricks).toBeInstanceOf(Function);
  });

  test('it should return 3', () => {
    const bricks = [1000, 1000, 1000, 2000];

    expect(maximizeBricks(bricks)).toEqual(3);
  });

  test('it should return 4', () => {
    const bricks = [1000, 200, 150, 200];

    expect(maximizeBricks(bricks)).toEqual(4);
  });
});
