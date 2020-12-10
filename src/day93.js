const removeVowels = (string) => {
  return string.replace(/[aeiou]/g, '');
};

module.exports = removeVowels;
