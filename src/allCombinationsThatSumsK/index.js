const sum = array => array.reduce((a, b) => a + b, 0);

const allCombinationsThatSumsK = (sample, k) => {
  const results = [];

  const generate = (currentSample, accum = []) => {
    if (sum(accum) === k) {
      results.push(accum);
      return;
    }
    if (currentSample.length === 0) return;

    const [head, ...rest] = currentSample;
    generate(rest, accum);
    generate(rest, [head, ...accum]);
  };
  generate(sample);

  return [...new Set(results)];
};

module.exports = allCombinationsThatSumsK;
