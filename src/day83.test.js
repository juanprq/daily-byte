const getPrimesUntilN = require('./day83');

describe('getPrimseUntilN', () => {
  test('it should be a function', () => {
    expect(getPrimesUntilN).toBeInstanceOf(Function);
  });

  test('it should return 1', () => {
    expect(getPrimesUntilN(3)).toEqual(1);
  });

  test('it should return 3', () => {
    expect(getPrimesUntilN(7)).toEqual(3);
  });
});
