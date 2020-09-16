const countMatches = require('./day9');

describe('countMatches', () => {
  test('should return 2 matches', () => {
    const jewels = 'abc';
    const stones = 'ac';
    expect(countMatches(jewels, stones)).toEqual(2);
  });

  test('should return 3 matches', () => {
    const jewels = 'Af';
    const stones = 'AaaddfFf';
    expect(countMatches(jewels, stones)).toEqual(3);
  });

  test('should return 0 matches', () => {
    const jewels = 'AYOPD';
    const stones = 'ayopd';
    expect(countMatches(jewels, stones)).toEqual(0);
  });
});
