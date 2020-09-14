const reverse = (string) =>
  string
    .split('')
    .reduce((accum, letter) => [letter, ...accum])
    .join('');

const isRemoveOnePalindrome = (string) => {
  if (string === reverse(string)) return true;

  for (let i = 0; i < string.length; i++) {
    const slicedString = string.slice(0, i) + string.slice(i + 1);

    if (slicedString === reverse(slicedString)) return true;
  }
  return false;
};

module.exports = isRemoveOnePalindrome;
