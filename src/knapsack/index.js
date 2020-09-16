const getValue = ([hWeight, ...weights], [hValue, ...values], capacity) => {
  if (!hWeight) return 0;
  if (hWeight > capacity) return getValue(weights, values, capacity);

  const leftValue = hValue + getValue(weights, values, capacity - hWeight);
  const rightValue = getValue(weights, values, capacity);

  return Math.max(leftValue, rightValue);
};

module.exports = getValue;
