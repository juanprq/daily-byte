const isPalindrome = string =>
  string === string.split('').reverse().join('');

const getPalindromeWords = (string) => {
  const letters = string.split('');
  const words = [];

  for (let i = 0; i < letters.length; i++) {
    for (j = i; j < letters.length; j++) {
      words.push(
        letters.slice(i, j + 1)
          .join(''),
      );
    }
  }

  const uniqueWords = [...new Set(words)];
  return uniqueWords.filter(isPalindrome);
};

module.exports = getPalindromeWords;
