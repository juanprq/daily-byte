const descInsertionSort = (array) => {
  const result = [...array];

  for (let i = 1; i < result.length; i++) {
    const pivot = result[i];

    let j = i - 1;
    while (i >= 0 && pivot > result[j]) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = pivot;
  }

  return result;
};

module.exports = descInsertionSort;
