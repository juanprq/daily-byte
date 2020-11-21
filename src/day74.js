const getLongestIncreasingSubsequence = (numbers) => {
  const results = [];

  const aux = ([head, ...rest], currentSequence = []) => {
    if (!head) {
      results.push(currentSequence);
      return;
    };

    const prev = currentSequence[currentSequence.length - 1] || -Infinity;
    if (head > prev) {
      aux(rest, [...currentSequence, head]);
    }
    aux(rest, currentSequence);
  };

  aux(numbers);

  return results.reduce((max, array) => {
    const length = array.length;
    return max > length ? max : length;
  }, 0);
};

module.exports = getLongestIncreasingSubsequence;
