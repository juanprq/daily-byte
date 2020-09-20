const intersection = (a, b) => {
  const index = a.reduce((accum, letter) => ({
    ...accum,
    [letter]: true,
  }), {})

  const included = {};
  const commonLetters = b.filter(letter => {
    if (index[letter] && !included[letter]) {
      included[letter] = true;
      return true;
    }

    return false;
  });

  return commonLetters;
};

module.exports = intersection;
