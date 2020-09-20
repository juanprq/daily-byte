const intersection = require('./day13');

describe('intersection', () => {
  test('should return [2, 4]', () => {
    const a = [2, 4, 4, 2];
    const b = [2, 4];

    expect(intersection(a, b)).toEqual([2, 4]);
  });

  test('should return [3]', () => {
    const a = [1, 2, 3, 3];
    const b = [3, 3];

    expect(intersection(a, b)).toEqual([3]);
  });

  test('should return []', () => {
    const a = [2, 4, 6, 8];
    const b = [1, 3, 5, 7];

    expect(intersection(a, b)).toEqual([]);
  });
});
