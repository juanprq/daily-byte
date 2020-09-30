const isOpening = (character) =>
  character.match(/(\(|\{|\[)/);

const matches = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const validateCharacters = (string) => {
  const stack = [];
  const characters = string.split('');

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];

    if (isOpening(character)) {
      stack.push(character);
    } else {
      const match = stack.pop();

      if (match !== matches[character]) return false
    }
  }

  return stack.length === 0;
};

module.exports = validateCharacters;
