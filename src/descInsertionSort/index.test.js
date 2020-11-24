const descInsertionSort = require('./index');

describe('descInsertionSort', () => {
  test('it should be a function', () => {
    expect(descInsertionSort).toBeInstanceOf(Function);
  });

  test('it should sort an empty array', () => {
    expect(descInsertionSort([])).toEqual([]);
  })

  test('it should sort a 1 element array', () => {
    expect(descInsertionSort([2])).toEqual([2]);
  });

  test('it should sort a 3 element array', () => {
    expect(descInsertionSort([3, 1, 5])).toEqual([5, 3, 1]);
  });

  test('it should sort a multi element array', () => {
    expect(descInsertionSort([4, 9, 28, 2, 43, 1, 9])).toEqual([43, 28, 9, 9, 4, 2, 1]);
  });

  test('it should not mutate the original array', () => {
    const array = [3, 5]
    expect(descInsertionSort(array)).not.toEqual(array);
  });
});
