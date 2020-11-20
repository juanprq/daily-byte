const sort = require('./index');

describe('insertionSort', () => {
  test('it should be a function', () => {
    expect(sort).toBeInstanceOf(Function);
  });

  test('it should sort and empty array', () => {
    expect(sort([])).toEqual([]);
  });

  test('it should sort a 1 element array', () => {
    expect(sort([3])).toEqual([3]);
  });

  test('it should sort a 2 element array', () => {
    expect(sort([10, 2])).toEqual([2, 10]);
  });

  test('it should sort a multiple elements array', () => {
    const array = [4, 29, 1, 39, 3, 2];
    expect(sort(array)).toEqual([1, 2, 3, 4, 29, 39]);
  });

  test('it should not mutate the original array', () => {
    const array = [4, 2, 3, 1];
    expect(sort(array)).not.toEqual(array);
  });
});
