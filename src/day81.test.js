const flipDigits = require('./day81');

describe('flipDigits', () => {
  test('it should be a function', () => {
    expect(flipDigits).toBeInstanceOf(Function);
  });

  test('it should return 4', () => {
    expect(flipDigits(27)).toEqual(4);
  });
});
