const countLetters = (string) =>
  string
    .split('')
    .reduce((accum, letter) =>
      ({ ...accum, [letter]: accum[letter] ? accum[letter] + 1 : 1 }),
      {},
    );

const isAnagram = (s, t) => {
  const sCount = countLetters(s);
  const tCount = countLetters(t);

  const sKeys = Object.keys(sCount);
  const tKeys = Object.keys(tCount);

  if (sKeys.length !== tKeys.length) return false;

  return Object
    .keys(sCount)
    .reduce((accum, key) =>
      (accum && sCount[key] === tCount[key]),
      true
    );
};

module.exports = isAnagram;
