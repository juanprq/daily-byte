const getOpenLockers = require('./day79');

describe('getOpenLockers', () => {
  test('it should be a function', () => {
    expect(getOpenLockers).toBeInstanceOf(Function);
  });

  test('it should return 1', () => {
    expect(getOpenLockers(1)).toEqual(1);
  });

  test('it should return 1', () => {
    expect(getOpenLockers(2)).toEqual(1);
  })
});
