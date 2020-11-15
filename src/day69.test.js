const canJump = require('./day69');

describe('canJump', () => {
  test('it should be a function', () => {
    expect(canJump).toBeInstanceOf(Function);
  });

  test('it should return false', () => {
    const stones = [0, 1, 10];
    expect(canJump(stones)).toBe(false);
  });

  test('it should return true', () => {
    const stones = [0, 1, 2, 4];
    expect(canJump(stones)).toBe(true);
  });
});
