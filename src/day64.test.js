const whoWins = require('./day64');

describe('whoWins', () => {
  test('it should be a function', () => {
    expect(whoWins).toBeInstanceOf(Function);
  });

  test('it should win player 1', () => {
    const nums = [1, 2, 3];

    expect(whoWins(nums)).toEqual(1);
  });

  test('it should win player 2', () => {
    const nums = [1, 10, 3];

    expect(whoWins(nums)).toEqual(2);
  });
});
