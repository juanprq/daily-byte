const areWords = (string, dictionary) => {
  let currentString = string;
  let test = 0;

  while (test < 10) {
    let found = false;
    for (let i = 0; i < dictionary.length; i++) {
      const word = dictionary[i];
      const currentWord = currentString.slice(0, word.length);

      if (currentWord === word) {
        currentString = currentString.slice(word.length);
        found = true;
        break;
      }
    }

    if (!found) {
      break;
    }

    test++;
  }

  return currentString.length === 0;
};

module.exports = areWords;
