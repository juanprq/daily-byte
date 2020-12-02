const invertVowels = require('./day85');

describe('invertVowels', () => {
  test('it should be a function', () => {
    expect(invertVowels).toBeInstanceOf(Function);
  });

  test('it should return cemputor', () => {
    expect(invertVowels('computer')).toEqual('cemputor');
  });

  test('it should return ', () => {
    expect(invertVowels('The Daily Byte')).toEqual('The Dialy Byte');
  });
});
