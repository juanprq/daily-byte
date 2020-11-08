const optimizeFlights = require('./day62');

describe('optimizeFlights', () => {
  test('it should be a funciton', () => {
    expect(optimizeFlights).toBeInstanceOf(Function);
  });

  test('it should return 310', () => {
    const prices = [
      [40, 30],
      [300, 200],
      [50, 50],
      [30, 60],
    ];

    expect(optimizeFlights(prices)).toEqual(310);
  });
});
