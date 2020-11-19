const getOperations = (s, t, n, m) => {
  if (n == 0) return m; // insert all letters
  if (m == 0) return n; // delete all letters
  if (s.charAt(n - 1) === t.charAt(m - 1)) {
    return getOperations(s, t, n - 1, m -1);
  }

  return 1 + Math.min(
    getOperations(s, t, n, m - 1), // insert
    getOperations(s, t, n - 1, m - 1), // delete
    getOperations(s, t, n - 1, m - 1), // replace
  );
};

const getMinimumOperations = (s, t) => {
  return getOperations(s, t, s.length, t.length);
};

module.exports = getMinimumOperations;
