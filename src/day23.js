const cleanImput = string => {
  const stack = [];
  const characters = string.split('');

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];

    if (character === '#') {
      stack.pop();
    } else {
      stack.push(character);
    }
  }

  return stack.join('');
};

const compareKeystrokes = (t, s) => {
  const cleanT = cleanImput(t);
  const cleanS = cleanImput(s);

  return cleanT === cleanS;
};

module.exports = compareKeystrokes;
