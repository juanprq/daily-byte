const getFirstUniqueCharacter = require('./day11.js');

describe('getFirstUniqueCharacter', () => {
  test('should return 2', () => {
    expect(getFirstUniqueCharacter('abcabd')).toEqual(2);
  });

  test('should return 1', () => {
    expect(getFirstUniqueCharacter('thedailybyte')).toEqual(1);
  });

  test('should return 0', () => {
    expect(getFirstUniqueCharacter('developer')).toEqual(0);
  });
});
