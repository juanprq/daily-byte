const robotReturning = require('./day3');

describe('robotReturning', () => {
  test('return true with simple path', () => {
    expect(robotReturning('LR')).toBe(true);
  });

  test('return false with no returning path', () => {
    expect(robotReturning('URURD')).not.toBe(true);
  });

  test('return true with long returning path', () => {
    expect(robotReturning('RUULLDRD')).toBe(true);
  });
});
