const twoSum = (array, k) => {
  const store = {};
  for (let i = 0; i < array.length; i++) {
    const difference = k - array[i];

    if (store[difference]) return true;
    store[array[i]] = true;
  }

  return false;
}

module.exports = twoSum;
