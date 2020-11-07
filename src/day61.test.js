const balanceFoods = require('./day61');

describe('balanceFoods', () => {
  test('it should be a function', () => {
    expect(balanceFoods).toBeInstanceOf(Function);
  });

  test('it should return 3 balanced meals', () => {
    const items = 'FDFDFD';
    expect(balanceFoods(items)).toEqual(3);
  });

  test('it should return 2 balanced meals ', () => {
    const items = 'FDFFDFDD';
    expect(balanceFoods(items)).toEqual(2);
  });
});
