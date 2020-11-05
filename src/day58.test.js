const getMaxPoints = require('./day58');

describe('getMaxPoints', () => {
  test('it should be a function', () => {
    expect(getMaxPoints).toBeInstanceOf(Function);
  });

  test('it should return 1 point', () => {
    const coins = [100, 150, 200];
    const e = 150;

    expect(getMaxPoints(coins, e)).toEqual(1);
  });

  test('it should return 2 points', () => {
    const coins = [100, 200, 300, 400];
    const e = 200;

    expect(getMaxPoints(coins, e)).toEqual(2);
  });

  test('it should return 0 points', () => {
    const coins = [300];
    const e = 200;

    expect(getMaxPoints(coins, e)).toEqual(0);
  });
});
