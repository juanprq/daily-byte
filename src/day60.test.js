const canBuy = require('./day60');

describe('canBuy', () => {
  test('it should be a function', () => {
    expect(canBuy).toBeInstanceOf(Function);
  });

  test('it should return true', () => {
    const customers = [5, 10];
    expect(canBuy(customers)).toBe(true);
  });

  test('it should return false', () => {
    const customers = [10];
    expect(canBuy(customers)).toBe(false);
  });

  test('it should return true', () => {
    const customers = [5, 5, 5, 10, 20];
    expect(canBuy(customers)).toBe(true);
  });
});
