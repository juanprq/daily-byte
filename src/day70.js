const intersection = (a, b) => {
    const result = new Set();

    for (var element of b) {
      if (a.has(element)) {
        result.add(element);
      }
    }

    return result;
};

const findSubsequences = (string) => {
  const chars = string.split('');
  const subsequences = new Set();

  const aux = ([head, ...rest], accum = '') => {
    if (!head) return;

    const a = accum + head;
    const b = accum;

    subsequences.add(a);
    subsequences.add(b);
    aux(rest, accum + head);
    aux(rest, accum);
  };

  aux(chars)

  return subsequences;
};

const findLongest = (set) => {
  let longest = 0;
  for (var elem of set) {
    if (elem.length > longest) {
      longest = elem.length;
    }
  }

  return longest;
};

const getLongestCommonSubsequence = (a, b) => {
  const subsequencesA = findSubsequences(a);
  const subsequencesB = findSubsequences(b);

  const inter = intersection(subsequencesA, subsequencesB);

  return findLongest(inter);
};

module.exports = getLongestCommonSubsequence;
