const getRandomLetter = require('./day12');

describe('getRandomLetter', () => {
  test('should return "t"', () => {
    const s = 'foobar';
    const t = 'barfoot';

    expect(getRandomLetter(s, t)).toEqual('t');
  });

  test('should return "a"', () => {
    const s = 'ide';
    const t = 'idea';

    expect(getRandomLetter(s, t)).toEqual('a');
  });

  test('should return " "', () => {
    const s = 'coding';
    const t = 'ingcod';

    expect(getRandomLetter(s, t)).toEqual('');
  });
});
