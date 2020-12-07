const getCompressedLength = (chars) => {
  const mapping = chars.reduce((accum, char) => {
    accum.add(char);
    return accum;
  }, new Set());

  return Math.min(chars.length, mapping.size * 2);
};

module.exports = getCompressedLength;
