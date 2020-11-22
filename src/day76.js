const getStairsCombination = (n) => {
  const aux = (currentStep = 0) => {
    if (currentStep === n) return 1;
    if (currentStep > n) return 0;

    const resultA = aux(currentStep + 1);
    const resultB = aux(currentStep + 2);

    return resultA + resultB;
  };

  return aux();
};

module.exports = getStairsCombination;
