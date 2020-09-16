const getValue = (weights, values, capacity) => {
  const store = [];

  const calculate = (weights, values, capacity, index) => {
    if (store[index] && store[index][capacity]) return store[index][capacity];
    if (index < 0) return 0;
    if (weights[index] > capacity) return calculate(weights, values, capacity, index - 1);

    const leftValue = values[index] + calculate(weights, values, capacity - weights[index], index - 1);
    const rightValue = calculate(weights, values, capacity, index - 1);
    const result = Math.max(leftValue, rightValue);

    if (store[index]) {
      store[index][capacity] = result;
    } else {
      const aux = [];
      aux[capacity] = result;
      store[index] = aux;
    }

    return result;
  };

  return calculate(weights, values, capacity, weights.length - 1);
};

module.exports = getValue;
