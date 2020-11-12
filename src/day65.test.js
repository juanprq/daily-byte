const stairmaster = require('./day65');

describe('stairmaster', () => {
  test('it should be a function', () => {
    expect(stairmaster).toBeInstanceOf(Function);
  });

  test('it should return 10', () => {
    const stairs = [5, 10, 20];
    expect(stairmaster(stairs)).toEqual(10);
  });

  test('it should return 10', () => {
    const stairs = [1, 5, 10, 3, 7, 2];
    expect(stairmaster(stairs)).toEqual(10);
  });
});
