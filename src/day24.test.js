const removeAdjacentDuplicates = require('./day24');

describe('removeAdjacentDuplicates', () => {
  test('should return ""', () => {
    const string = 'abccba';

    expect(removeAdjacentDuplicates(string)).toEqual('');
  });

  test('should return "fbar"', () => {
    const string = 'foobar';

    expect(removeAdjacentDuplicates(string)).toEqual('fbar');
  });

  test('should return "a"', () => {
    const string = 'abccbefggfe';

    expect(removeAdjacentDuplicates(string)).toEqual('a');
  });
});
