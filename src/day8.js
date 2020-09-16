const twoSum = (array, k) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) break;

      const sum = array[i] + array[j];
      if (sum === k) return true;
    }
  }
  return false;
}

module.exports = twoSum;
