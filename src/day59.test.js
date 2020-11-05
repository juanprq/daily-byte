const smashStones = require('./day59');

describe('smashStones', () => {
  test('it should be a function', () => {
    expect(smashStones).toBeInstanceOf(Function);
  });

  test('it should return 1', () => {
    const stones = [2, 4, 3, 8];

    expect(smashStones(stones)).toEqual(1);
  });

  test('it should return 0', () => {
    const stones = [1, 2, 3, 4];

    expect(smashStones(stones)).toEqual(0);
  });
});
