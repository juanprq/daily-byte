const searchGold = require('./day53');

describe('searchGold', () => {
  test('it should be a function', () => {
    expect(searchGold).toBeInstanceOf(Function);
  });

  test('it should return 23', () => {
    const goldMine = [
      [0,2,0],
      [8,6,3],
      [0,9,0]
    ];

    expect(searchGold(goldMine)).toEqual(23);
  });
});
