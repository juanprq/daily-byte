const makeChange = require('./day66');

describe('makeChange', () => {
  test('it should be a function', () => {
    expect(makeChange).toBeInstanceOf(Function);
  });

  // test('it should return 6', () => {
  //   const coins = [1, 5, 10, 25];
  //   const amount = 78;

  //   expect(makeChange(coins, amount)).toEqual(6);
  // });

  test('it should return 1', () => {
    const coins = [1, 5];
    const amount = 5;

    expect(makeChange(coins, amount)).toEqual(1);
  });

  test('it should return 2', () => {
    const coins = [1, 2, 3];
    const amount = 6;

    expect(makeChange(coins, amount)).toEqual(2);
  });


  test('it should return 1', () => {
    const coins = [1, 5, 10, 25];
    const amount = 54;

    expect(makeChange(coins, amount)).toEqual(6);
  });

});
