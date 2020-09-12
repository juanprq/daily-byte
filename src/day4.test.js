const isCapitalized = require('./day4');

describe('isCapitalized', () => {
  test('USA Should return true', () => {
    const string = 'USA';
    expect(isCapitalized(string)).toBe(true);
  });

  test('Calvin should return true', () => {
    const string = 'Calvin';
    expect(isCapitalized(string)).toBe(true);
  });

  test('CompUter should return false', () => {
    const string = 'compUter';
    expect(isCapitalized(string)).toBe(false);
  });

  test('coding should return true', () => {
    const string = 'coding';
    expect(isCapitalized(string)).toBe(true);
  });
});
