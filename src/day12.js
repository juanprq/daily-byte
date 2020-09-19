const getRandomLetter = (s, t) => {
  const lettersPresence = s
    .split('')
    .reduce((accum, letter) => ({ ...accum, [letter]: true }), {});

  const tLetters = t.split('');
  for (let i = 0; i < tLetters.length; i++) {
    const letter = tLetters[i];
    if (!lettersPresence[letter]) return letter;
  }

  return '';
};

module.exports = getRandomLetter;
