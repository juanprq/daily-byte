const getValue = require('./index');

describe('knapsack', () => {
  test('should return 200', () => {
    const weights = [20, 10, 40, 30, 15];
    const values = [40, 100, 50, 60, 30];
    const capacity = 60;

    expect(getValue(weights, values, capacity)).toEqual(200);
  });

  test('should return 80', () => {
    const weights = [5, 3, 4, 2];
    const values = [60, 50, 70, 30];
    const capacity = 5;

    expect(getValue(weights, values, capacity)).toEqual(80);
  });
});
