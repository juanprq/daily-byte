const areWords = require('./day73');

describe('areWords', () => {
  test('it should be a function', () => {
    expect(areWords).toBeInstanceOf(Function);
  });

  test('it should return true', () => {
    const s = 'thedailybyte';
    const dictionary = ['the', 'daily', 'byte'];

    expect(areWords(s, dictionary)).toBe(true);
  });

  test('it should return false', () => {
    const s = 'pizzaplanet';
    const dictionary = ['plane', 'pizza'];

    expect(areWords(s, dictionary)).toBe(false);
  });
});
