const getMissingNumber = (numbers) => {
  const result = new Array(numbers.length + 1)
    .fill(true);

  for(let i = 0; i < numbers.length; i++) {
    result[numbers[i]] = false;
  }

  return result.reduce((accum, value, index) => {
    if (value) return index;
    return accum;
  }, -1);
};

module.exports = getMissingNumber;
