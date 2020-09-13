const sumBinary = require('./day5');

describe('sumBinary', () => {
  test('"100" + "1" should return "101"', () => {
    expect(sumBinary('100', '1')).toEqual('101');
  });

  test('"11" + "1" should return "100"', () => {
    expect(sumBinary('11', '1')).toEqual('100');
  });

  test('"1" + "0" should return "1"', () => {
    expect(sumBinary('1', '0')).toEqual('1');
  });
});
