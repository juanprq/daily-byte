const getMinimumRaft = require('./day57');

describe('getMinimumRaft', () => {
  test('it should be a function', () => {
    expect(getMinimumRaft).toBeInstanceOf(Function);
  });

  test('it should return 3', () => {
    const weights = [1, 3, 5, 2];
    const limit = 5;

    expect(getMinimumRaft(weights, limit)).toEqual(3);
  });

  test('it should return 1', () => {
    const weights = [1, 2];
    const limit = 3;

    expect(getMinimumRaft(weights, limit)).toEqual(1);
  });

  test('it should return 3', () => {
    const weights = [4, 2, 3, 3];
    const limit = 5;

    expect(getMinimumRaft(weights, limit)).toEqual(3);
  });
});
