const stairmaster = (stairs) => {
  const aux = (currentStairs, accum = []) => {
    if (currentStairs.length === 0 || currentStairs.length === 1) {
      return 0;
    }
    // if (currentStairs.length === 1) {
    //   results.push(accum)
    //   // results.push([...accum, currentStairs[0]]);
    //   return currentStairs[0];
    // }

    const [first, second, ...rest] = currentStairs;
    const a = first + aux([second, ...rest]);
    const b = second + aux(rest);
    // aux([second, ...rest], [...accum, first]);
    // aux(rest, [...accum, second]);

    return a < b ? a : b;
  };
  return aux(stairs);
};

module.exports = stairmaster;
