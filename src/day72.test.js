const getMinimumOperations = require('./day72');

describe('getMinimumOperations', () => {
  test('it should be a function', () => {
    expect(getMinimumOperations).toBeInstanceOf(Function);
  });

  test('it should return 1', () => {
    const s = 'cat';
    const t = 'bat';

    expect(getMinimumOperations(s, t)).toEqual(1);
  });

  test('it should return 2', () => {
    const s = 'beach';
    const t = 'batch';

    expect(getMinimumOperations(s, t)).toEqual(2);
  });
});
