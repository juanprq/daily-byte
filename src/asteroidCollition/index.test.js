const calculateCollition = require('./index');

describe('asteroidCollition', () => {
  test('should return "[5, 8]"', () => {
    const asteroids = [5, 8, -5];
    expect(calculateCollition(asteroids)).toEqual([5, 8]);
  });

  test('should return "[]"', () => {
    const asteroids = [10, -10];
    expect(calculateCollition(asteroids)).toEqual([]);
  });

  test('should return "[20]"', () => {
    const asteroids = [20, -10];
    expect(calculateCollition(asteroids)).toEqual([20]);
  });

  test('should return [-20]', () => {
    const asteroids = [-20, 10];
    expect(calculateCollition(asteroids)).toEqual([-20]);
  });
});
