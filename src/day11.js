const getFirstUniqueCharacter = (string) => {
  const count = string
    .split('')
    .reduce((accum, letter) => ({ ...accum, [letter]: (accum[letter] ? accum[letter] + 1 : 1) }), {});

  const [firstKey] = Object
    .keys(count)
    .filter(key => count[key] === 1);

  return firstKey ? string.indexOf(firstKey) : -1
};

module.exports = getFirstUniqueCharacter;
