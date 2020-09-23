const merge = require('./day15');

describe('merge', () => {
  test('return sorted', () => {
    const list1 = [1, 2, 3];
    const list2 = [4, 5, 6];

    expect(merge(list1, list2)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test('return sorted', () => {
    const list1 = [1, 3, 5];
    const list2 = [2, 4, 6];

    expect(merge(list1, list2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('return sorted', () => {
    const list1 = [4, 4, 7];
    const list2 = [1, 5, 6];

    expect(merge(list1, list2)).toEqual([1, 4, 4, 5, 6, 7]);
  });
});
