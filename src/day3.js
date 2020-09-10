const initialState = {
  L: 0,
  R: 0,
  U: 0,
  D: 0,
};

const robotReturning = (string) => {
  const letters = string.split('');
  const count = letters.reduce((accum, letter) => (
    {
      ...accum,
      [letter]: accum[letter] + 1,
    }
  ), initialState);

  return count.L === count.R && count.U === count.D;
}

module.exports = robotReturning;
