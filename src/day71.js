const sum = array => array.reduce((a, b) => a + b, 0);

const getMaximumSum = (nums) => {
  const results = [];

  const generateRanges = (lower, upper) => {
    if (lower === upper) return;

    results.push(nums.slice(lower, upper));
    generateRanges(lower + 1, upper);
    generateRanges(lower, upper - 1);
  };

  generateRanges(0, nums.length);

  return results.reduce((max, subArray) => {
    const arraySum = sum(subArray);
    if (arraySum > max) {
      return arraySum;
    }

    return max;
  }, 0);
};

module.exports = getMaximumSum;
