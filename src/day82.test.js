const findFriends = require('./day82');

describe('findFriends', () => {
  test('it should be a function', () => {
    expect(findFriends).toBeInstanceOf(Function);
  });

  test('it should return 2', () => {
    const input = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];

    expect(findFriends(input)).toEqual(2);
  });
});
