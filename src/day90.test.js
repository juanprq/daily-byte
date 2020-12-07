const getCompressedLength = require('./day90');

describe('getCompressedLength', () => {
  test('it should be a function', () => {
    expect(getCompressedLength).toBeInstanceOf(Function);
  });

  test('it should return 2', () => {
    const chars = ['a', 'a', 'a', 'a', 'a', 'a'];

    expect(getCompressedLength(chars)).toEqual(2);
  });

  test('it should return 6', () => {
    const chars = ['a', 'a', 'b', 'b', 'c', 'c'];

    expect(getCompressedLength(chars)).toEqual(6);
  });

  test('it should return 3', () => {
    const chars = ['a', 'b', 'c'];

    expect(getCompressedLength(chars)).toEqual(3);
  });
});
