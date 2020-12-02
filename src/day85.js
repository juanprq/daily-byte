const vowels = ['a', 'e', 'i', 'o', 'u'];

const isVowel = (char) => {
  return vowels.includes(char);
};

const invertVowels = (string) => {
  const vowels = string
    .split('')
    .map((char, index) => {
      if (isVowel(char)) {
        return index;
      }

      return undefined;
    })
    .filter(a => a);

  let currentIndex = 0;
  return string
    .split('')
    .map(char => {
      if (isVowel(char)) {
        currentIndex++;
        const charIndex = vowels[vowels.length - currentIndex];
        return string.charAt(charIndex);
      }

      return char;
    })
    .join('');
};

module.exports = invertVowels;
