const LIMIT = 26;

const decrypPossibilities = (message) => {
  let result = [];
  const characters = message.split('');

  const aux = (currentCharacters, possibility = []) => {
    if (currentCharacters.length === 0) {
      result.push(possibility);
      return;
    }
    if (currentCharacters.length === 1) {
      result.push([...possibility, currentCharacters[0]]);
      return;
    }

    const [first, second, ...rest] = currentCharacters;
    aux([second, ...rest], [...possibility, first]);

    const newChar = first + second;

    if (Number.parseInt(newChar, 10) <= LIMIT) {
      aux(rest, [...possibility, newChar]);
    }
  };

  aux(characters);
  return result.length;
};

module.exports = decrypPossibilities;
