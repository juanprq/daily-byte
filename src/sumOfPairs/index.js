const sumOfPairs = (array, sum) => {
  let lower = 0;
  let upper = array.length - 1;

  while(true) {
    const result = array[lower] + array[upper];

    if (result === sum) {
      return [array[lower], array[upper]];
    };
    if (result < sum) {
      lower++;
    } else {
      upper--;
    }
  }
};

module.exports = sumOfPairs;
