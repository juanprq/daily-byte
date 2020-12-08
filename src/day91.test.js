const updateRabbitPaths = require('./day91');

describe('updateRabbitPaths', () => {
  test('it should be a function', () => {
    expect(updateRabbitPaths).toBeInstanceOf(Function);
  });

  test('it should return correct path', () => {
    const input = [
      [-1, 0,  1],
      [1,  1, -1],
      [1,  1,  0],
    ];
    const output = [
      [-1, 0,  1],
      [2,  1, -1],
      [2,  1,  0],
    ];

    expect(updateRabbitPaths(input)).toEqual(output);
  });

  test('it should return correct path', () => {
    const input = [
      [1,  1,  1],
      [1, -1, -1],
      [1,  1,  0],
    ];
    const output = [
      [4,  5,  6],
      [3, -1, -1],
      [2,  1,  0],
    ];

    expect(updateRabbitPaths(input)).toEqual(output);
  });
});
