const generateValidCombinations = (n) => {
  const results = [];

  const aux = (accum = []) => {
    if (accum.length === n) {
      if (accum.filter(a => a === 0).length === n / 2) {
        results.push(accum);
      }
      return;
    }

    aux([...accum, 0]);
    aux([...accum, 1]);
  };
  aux();

  return results;
};

const sumCombination = (combination, prices) => {
  return combination.reduce((accum, value, index) => {
    const officePrices = prices[index];
    return accum + officePrices[value];
  }, 0);
}

const optimizeFlights = (prices) => {
  const combinations = generateValidCombinations(prices.length);
  const validPrices = combinations.map(combination =>
    sumCombination(combination, prices),
  );

  return Math.min(...validPrices);
};

module.exports = optimizeFlights;
