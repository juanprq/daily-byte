const canForm = require('./day87');

describe('canForm', () => {
  test('it should be a function', () => {
    expect(canForm).toBeInstanceOf(Function);
  });

  test('it should return false', () => {
    const passage = 'bat';
    const text = 'cat';

    expect(canForm(passage, text)).toBe(false);
  });

  test('it should return true', () => {
    const passage = 'dog';
    const text = 'didnotgo';

    expect(canForm(passage, text)).toBe(true);
  });
});
