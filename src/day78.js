const findBadVersion = (release, isBadRelease) => {
  const aux = (lower = 0, upper = release, response = release) => {
    if (upper - lower <= 1) return response;

    const mid = Math.floor((lower + upper) / 2);
    if (isBadRelease(mid)) {
      return aux(lower, mid, mid);
    } else {
      return aux(mid, upper, release);
    }
  };

  return aux();
};

module.exports = findBadVersion;
