const permutateChars = require('./day50');

describe('permutateChars', () => {
  test('it should be a function', () => {
    expect(permutateChars).toBeInstanceOf(Function);
  });

  test('it should work', () => {
    const input = 'c7w2';

    expect(permutateChars(input))
      .toEqual([
        'c7w2',
        'c7W2',
        'C7w2',
        'C7W2'
      ]);
  });
});
