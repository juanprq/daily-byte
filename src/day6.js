const allEqual = ([a, b, ...rest]) => {
  if (!b) return true;
  return a === b && allEqual([a, ...rest]);
};

const getLongestCommonPrefix = (words) => {
  const shortestWord = words.reduce(
    (current, word) => (word.length < current.length ? word : current),
  );

  const n = shortestWord.length;
  let prefix = '';
  for (let i = n; i >= 0; i--) {
    const prefixes = words
      .map(word => word.substring(0, i));

    if (allEqual(prefixes)) {
      prefix = prefixes[0];
      break;
    }
  }

  return prefix;
};

module.exports = getLongestCommonPrefix;
