const colors = [0, 1, 2];

const getIndexes = (omitIndex) =>
  colors.filter(index => index !== omitIndex );

const paintHouses = (costs) => {
  const paint = ([currentHouse, ...restOfHouses], prevColorIndex) => {
    if (!currentHouse) {
      return 0;
    }

    const options = getIndexes(prevColorIndex)
      .map(colorIndex => {
        const currentCost = currentHouse[colorIndex];

        return currentCost + paint(restOfHouses, colorIndex);
      });

    return Math.min(...options);
  };

  return paint(costs);
};

module.exports = paintHouses;
