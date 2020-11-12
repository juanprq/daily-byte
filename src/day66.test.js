const makeChange = require('./day66');

describe('makeChange', () => {
  test('it should be a function', () => {
    expect(makeChange).toBeInstanceOf(Function);
  });

  test('it should return 6', () => {
    const coins = [1, 5, 10, 25];
    const amount = 78;

    expect(makeChange(coins, amount)).toEqual(6);
  });
});
