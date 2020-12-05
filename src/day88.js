const isSubsequence = (s, t) => {
  const space = [];
  const aux = ([head, ...rest], accum = []) => {
    if (!head) {
      space.push(accum.join(''));
      return;
    }

    aux(rest, [...accum, head]);
    aux(rest, accum);
  };
  aux(t);

  return space.find(a => a === s) !== undefined;
};

module.exports = isSubsequence;
