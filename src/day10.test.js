const isAnagram = require('./day10');

describe('isAnagram', () => {
  test('should return true', () => {
    const s = 'cat';
    const t = 'tac';

    expect(isAnagram(s, t)).toBe(true);
  });

  test('should return true', () => {
    const s = 'listen';
    const t = 'silent';

    expect(isAnagram(s, t)).toBe(true);
  });

  test('should return false', () => {
    const s = 'program';
    const t = 'function';

    expect(isAnagram(s, t)).toBe(false);
  });
});
