const getMinimumRaft = (weights, limit) => {

  const optimize = ([head, ...rest]) => {
    if (!head) return [];
    if (rest.length === 0) return [[head]];
    if (head === limit) return [[head], ...optimize(rest)];

    let biggestComplementIndex;
    for (let i = 0; i < rest.length; i++) {
      const complement = rest[i];
      const biggestComplement = biggestComplementIndex
        ? rest[biggestComplementIndex]
        : -Infinity;

      if (head + complement <= limit && complement > biggestComplement) {
        biggestComplementIndex = i;
      }
    }

    if (biggestComplementIndex !== undefined) {
      return [
        [head, rest[biggestComplementIndex]],
        ...optimize([
          ...rest.slice(0, biggestComplementIndex),
          ...rest.slice(biggestComplementIndex + 1),
        ]),
      ];
    } else {
      return [[head], ...optimize(rest)];
    }
  }

  const result = optimize(weights);

  return result.length;
};

module.exports = getMinimumRaft;
