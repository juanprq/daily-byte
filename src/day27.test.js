const MovingAverage = require('./day27');

describe('MovingAverage', () => {
  const DEFAULT_CAPACITY = 3;
  let movingAverage;

  beforeEach(() => {
    movingAverage = new MovingAverage(DEFAULT_CAPACITY);
  });

  test('should be a class', () => {
    expect(movingAverage).toBeInstanceOf(MovingAverage);
  });

  test('should have 3 capacity', () => {
    expect(movingAverage.capacity).toEqual(DEFAULT_CAPACITY);
  });

  test('should respond to next function', () => {
    expect(movingAverage.next).toBeInstanceOf(Function);
  });

  test('should calculate moving average', () => {
    expect(movingAverage.next(3)).toEqual(3);
    expect(movingAverage.next(5)).toEqual(4);
    expect(movingAverage.next(7)).toEqual(5);
    expect(movingAverage.next(6)).toEqual(6);
  });
});
