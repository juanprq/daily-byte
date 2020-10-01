const peak = stack => stack[stack.length - 1];

const removeAdjacentDuplicates = (string) => {
  const stack = [];
  const characters = string.split('');

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];

    if (peak(stack) === character) {
      while (peak(stack) === character) {
        stack.pop();
      }
    } else {
      stack.push(character);
    }
  }

  return stack.join('');
};

module.exports = removeAdjacentDuplicates;
