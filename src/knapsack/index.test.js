const getValue = require('./index');

describe('knapsack', () => {
  test('should return 200', () => {
    const weights = [20, 10, 40, 30, 15];
    const values = [40, 100, 50, 60, 30];
    const capacity = 60;

    expect(getValue(weights, values, capacity)).toEqual(200);
  });
});
