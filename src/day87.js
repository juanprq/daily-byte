const canForm = (passage, text) => {
  // convert the text into a hash with key = to char, and value = to bool
  const chars = text
    .split('')
    .reduce((accum, char) => ({ ...accum, [char]: true }), {});

  return passage
    .split('')
    .reduce((accum, char) => accum && (chars[char] || false), true);
};

module.exports = canForm;
