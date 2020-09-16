const getValue = (weights, values, capacity) => {
  const calculate = (weights, values, capacity, index) => {
    if (index < 0) return 0;
    if (weights[index] > capacity) return calculate(weights, values, capacity, index - 1);

    const leftValue = values[index] + calculate(weights, values, capacity - weights[index], index - 1);
    const rightValue = calculate(weights, values, capacity, index - 1);

    return Math.max(leftValue, rightValue);
  };

  return calculate(weights, values, capacity, weights.length - 1);
};

module.exports = getValue;
