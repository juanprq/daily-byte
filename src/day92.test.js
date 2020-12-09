const defangIp = require('./day92');

describe('defangId', () => {
  test('it should be a function', () => {
    expect(defangIp).toBeInstanceOf(Function);
  });

  test('it should return correct defang', () => {
    const input = '127.0.0.1';

    expect(defangIp(input)).toEqual('127[.]0[.]0[.]1');
  });
});
