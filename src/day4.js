const capitalize = (string) => {
  const [head, ...rest] = string;

  return head.toUpperCase() + rest.join('').toLowerCase();
};

const isCapitalized = (string) => {
  if (string === string.toLowerCase()) return true;
  if (string === string.toUpperCase()) return true;
  if (string === capitalize(string)) return true;

  return false;
};

module.exports = isCapitalized;
