const pathExists = require('./day52');

describe('pathExists', () => {
  const letters = [
    ['C', 'A', 'T', 'F'],
    ['B', 'G', 'E', 'S'],
    ['I', 'T', 'A', 'E'],
  ];

  test('it should be a function', () => {
    expect(pathExists).toBeInstanceOf(Function);
  });

  test('it should return true for "CAT"', () => {
    expect(pathExists(letters, 'CAT')).toBe(true);
  });

  test('it should return true for "TEA"', () => {
    expect(pathExists(letters, 'TEA')).toBe(true);
  });

  test('it should return true for "SEA"', () => {
    expect(pathExists(letters, 'SEA')).toBe(true);
  });

  test('it should return false for "BAT"', () => {
    expect(pathExists(letters, 'BAT')).toBe(false);
  });
});
