const reverse = (string = '') => {
  const chars = string.split('');
  return chars.reduce((accum, char) => [char, ...accum], []).join('');
};

module.exports = reverse;
