const getStringOfDigits = require('./day51');

describe('getStringOfDigits', () => {
  test('should be a function', () => {
    expect(getStringOfDigits).toBeInstanceOf(Function);
  });

  test('should return all combinations', () => {
    expect(getStringOfDigits('23'))
      .toEqual([
        'ad',
        'ae',
        'af',
        'bd',
        'be',
        'bf',
        'cd',
        'ce',
        'cf',
      ]);
  });
});
