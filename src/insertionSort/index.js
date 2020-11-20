const sort = (array) => {
  const copy = [...array];

  for (let i = 1; i < copy.length; i++) {
    const pivot = copy[i];

    let j = i - 1;
    while (j >= 0 && pivot < copy[j]) {
      // move array to right
      copy[j + 1] = copy[j];
      j--;
    }

    // when we found the correct positio of pivor
    // that is left < pivor < right
    // insert it
    copy[j + 1] = pivot;
  }

  return copy;
};

module.exports = sort;
