const isPalindrome = (string = '') => {
  const cleanString = string.toLowerCase().replace(/\W/g, '');
  const reverse = cleanString
    .split('')
    .reduce((accum, letter) => [letter, ...accum], [])
    .join('');

  return reverse === cleanString;
};

module.exports = isPalindrome;
