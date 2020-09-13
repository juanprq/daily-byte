const getLongestCommonPrefix = require('./day6');

describe('getLongestCommonPrefix', () => {
  test('should return "col"', () => {
    const input = [
      'colorado',
      'color',
      'cold',
    ];
    expect(getLongestCommonPrefix(input)).toEqual('col');
  });

  test('should return ""', () => {
    const input = ['a', 'b', 'c'];
    expect(getLongestCommonPrefix(input)).toEqual('');
  });

  test('should return spot', () => {
    const input = [
      'spot',
      'spotty',
      'spotted',
    ];
    expect(getLongestCommonPrefix(input)).toEqual('spot');
  });
});
