const countGreaterElements = (arrayA, arrayB) =>
  arrayA.map(element => {
    const greaterElement = arrayB.find(b => b > element);

    return greaterElement || -1;
  });

module.exports = countGreaterElements;
