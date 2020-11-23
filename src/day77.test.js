const stealGallery = require('./day77');

describe('stealGallery', () => {
  test('it should be a function', () => {
    expect(stealGallery).toBeInstanceOf(Function);
  });

  test('it should return 13', () => {
    const w = 10;
    const weights = [4, 1, 3];
    const values = [4, 2, 7];

    expect(stealGallery(w, weights, values)).toEqual(13);
  });

  test('it should return 7', () => {
    const w = 5;
    const weights = [2, 4, 3];
    const values = [3, 7, 2];

    expect(stealGallery(w, weights, values)).toEqual(7);
  });

  test('it should return 11', () => {
    const w = 7;
    const weights = [1, 3, 4];
    const values = [3, 5, 6];

    expect(stealGallery(w, weights, values)).toEqual(11);
  });
});
