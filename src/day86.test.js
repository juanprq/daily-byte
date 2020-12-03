const killProcess = require('./day86');

describe('killProcess', () => {
  test('it should be a function', () => {
    expect(killProcess).toBeInstanceOf(Function);
  });

  test('it should return [3, 7]', () => {
    const pid =  [2, 4, 3, 7];
    const ppid = [0, 2, 2, 3];

    expect(killProcess(pid, ppid, 7)).toEqual([3, 7]);
  });
});
