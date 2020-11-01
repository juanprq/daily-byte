const sum = (array) => array.reduce((accum, value) => accum + value, 0);

const generateUniqueCombinations = (numbers, target) => {
  const result = [];

  const generate = (accum = [], currentIndex = 0) => {
    if (sum(accum) > target) return;

    const currentDigit = numbers[currentIndex];
    const newAccum = [...accum, currentDigit];

    if (sum(newAccum) === target) {
      result.push(newAccum);
      return
    }

    for (let i = currentIndex; i < numbers.length; i++) {
      generate(newAccum, i);
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    generate([], i);
  }

  return result;
};

module.exports = generateUniqueCombinations;
