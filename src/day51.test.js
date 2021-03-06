const getStringOfDigits = require('./day51');

describe('getStringOfDigits', () => {
  test('should be a function', () => {
    expect(getStringOfDigits).toBeInstanceOf(Function);
  });

  test('should return for null mapping', () => {
    expect(getStringOfDigits('0')).toEqual([]);
  });

  test('should return for 1 digit', () => {
    expect(getStringOfDigits('9')).toEqual(['w', 'x', 'y', 'z']);
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
