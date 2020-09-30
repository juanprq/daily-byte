const validateCharacters = require('./day22');

describe('validateCharacters', () => {
  test('should return true', () => {
    const string = '(){}[]';

    expect(validateCharacters(string)).toBe(true);
  });

  test('should return true', () => {
    const string = '(({[]}))';

    expect(validateCharacters(string)).toBe(true);
  });

  test('should return false', () => {
    const string = '{(})';

    expect(validateCharacters(string)).toBe(false);
  });
});
