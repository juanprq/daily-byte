const getStairsCombination = require('./day76');

describe('getStairsCombination', () => {
  test('it should be a function', () => {
    expect(getStairsCombination).toBeInstanceOf(Function);
  });

  test('it should return 2', () => {
    expect(getStairsCombination(2)).toEqual(2);
  });

  test('it should return 3', () => {
    expect(getStairsCombination(3)).toEqual(3);
  });

  test('it should return 5', () => {
    expect(getStairsCombination(4)).toEqual(5);
  });
});
