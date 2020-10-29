const digitMapping = {
  '0': null,
  '1': null,
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};

const combine = (space) => {
  if (space.length === 0) return [];
  if (space.length === 1) return space[0];
  if (space.length === 2) {
    const [head, tail] = space;
    return head.reduce((accum, headCharacter) => {
      const words = tail.map(tailCharacter => headCharacter + tailCharacter);
      return [...accum, ...words];
    }, []);
  }

  const [head, ...rest] = space;
  return test([head, test(rest)]);
};

const getStringOfDigits = (digitsStr) => {
  const digits = digitsStr.split('');
  const space = digits.reduce((accum, digit) => {
    const map = digitMapping[digit];
    if (!map) return accum;

    return [...accum, map.split('')];
  }, []);

  return combine(space);
};


module.exports = getStringOfDigits;
