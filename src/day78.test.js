const findBadVersion = require('./day78');

describe('findBadVersion', () => {
  test('it should be a function', () => {
    expect(findBadVersion).toBeInstanceOf(Function);
  });

  test('it should return 4', () => {
    const isBadRelease = (release) => release >= 4;

    expect(findBadVersion(5, isBadRelease)).toEqual(4);
  });

  test('it should call the function 3 times', () => {
    const isBadRelease = jest.fn((release) => release >= 4);

    findBadVersion(5, isBadRelease);
    expect(isBadRelease).toHaveBeenCalledTimes(3);
  });
});
