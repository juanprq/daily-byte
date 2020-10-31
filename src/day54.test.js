const generateParenthesis = require('./day54');

describe('generateParenthesis', () => {
  test('it should be a function', () => {
    expect(generateParenthesis).toBeInstanceOf(Function);
  });

  test('it should generate parenthesis for n = 3', () => {
    expect(generateParenthesis(3))
      .toEqual([
        '((()))',
        '(()())',
        '(())()',
        '()(())',
        '()()()',
      ]);
  });
});
