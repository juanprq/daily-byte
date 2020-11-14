const findPaths = (m, n) => {
  let paths = 0;

  const aux = (currentM = 0, currentN = 0) => {
    if (currentM === m - 1 && currentN === n - 1) {
      paths++;
    }
    if (currentM >= m) return;
    if (currentN >= n) return;

    aux(currentM + 1, currentN);
    aux(currentM, currentN + 1);
  };
  aux();

  return paths;
};

module.exports = findPaths;
