const compareKeystrokes = require('./day23');

describe('compareKeystrokes', () => {
  test('should return true', () => {
    const t = 'ABC#';
    const s = 'CD##AB';

    expect(compareKeystrokes(t, s)).toBe(true);
  });

  test('should return true', () => {
    const t = 'como#pur#ter';
    const s = 'computer';

    expect(compareKeystrokes(t, s)).toBe(true);
  });

  test('should return false', () => {
    const t = 'cof#dim#ng';
    const s = 'code';

    expect(compareKeystrokes(t, s)).toBe(false);
  });
});
