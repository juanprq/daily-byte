const decryptPossibilities = require('./day67');

describe('decryptPossibilities', () => {
  test('it should be a function', () => {
    expect(decryptPossibilities).toBeInstanceOf(Function);
  });

  test('it should return 2', () => {
    expect(decryptPossibilities('23')).toEqual(2);
  });

  test('it should return 3', () => {
    expect(decryptPossibilities('1234')).toEqual(3);
  });
});
