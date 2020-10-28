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
}

const getStringOfDigits = (digitsStr) => {
  const digits = digitsStr.split('');
  const mapping = digits.reduce((accum, digit) => {
    const map = digitMapping[digit];
    if (!map) return accum;

    return [...accum, map.split('')];
  }, []);


  if (mapping.length === 0) return mapping;
  if (mapping.length === 1) return mapping[0];

  const result = [];
  for (let i = 0; i < mapping[0].length; i++) {
    const firstChar = mapping[0][i];

    for (let j = 0; j < mapping[1].length; j++) {
      const secondChar = mapping[1][j];

      result.push(firstChar + secondChar);
    }
  }

  return result;
};

module.exports = getStringOfDigits;
