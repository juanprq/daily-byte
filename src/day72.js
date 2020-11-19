const getMinimumOperations = (s, t) => {
  let operations = Math.abs(s.length - t.length);

  for(let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== t.charAt(i)) {
      operations++;
    }
  }

  return operations;
};

module.exports = getMinimumOperations;
