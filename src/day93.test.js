const removeVowels = require('./day93');

describe('removeVowels', () => {
  test('it should be a function', () => {
    expect(removeVowels).toBeInstanceOf(Function);
  });

  test('it should return ""', () => {
    expect(removeVowels('aeiou')).toEqual('');
  });

  test('it should return "byt"', () => {
    expect(removeVowels('byte')).toEqual('byt');
  });

  test('it should return "xyz"', () => {
    expect(removeVowels('xyz')).toEqual('xyz');
  });
});
