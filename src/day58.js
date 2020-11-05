const getMinIndex = (array) => array.reduce((minIndex, value, index)  => {
  const currentMin = array[minIndex] || Infinity;

  return value < currentMin ? index : minIndex;
}, -1);

const getMaxIndex = (array) =>
array.reduce((maxIndex, value, index)  => {
  const currentMax = array[maxIndex] || -Infinity;

  return value > currentMax ? index : maxIndex;
}, -1);

const getMaxPoints = (coinBag, energy) => {
  let points = 0;

  const play = (coins, e, currentPoints = 0, give = true) => {
    if (coins.length === 0) return;
    if (!give && currentPoints <= 0) return;

    let newPoints;
    let newEnergy;
    let newCoins;

    if (give) {
      const minIndex = getMinIndex(coins);
      const coin = coins[minIndex];
      if (!coin) return;
      if (coin > e) return;

      newPoints = currentPoints + 1;
      newEnergy = e - coin;
      newCoins = [
        ...coins.slice(0, minIndex),
        ...coins.slice(minIndex + 1),
      ];
    } else {
      if (coins.length <= 1) return;
      const maxIndex = getMaxIndex(coins);
      const coin = coins[maxIndex];
      if (!coin) return;

      newPoints = currentPoints - 1;
      newEnergy = e + coin;
      newCoins = [
        ...coins.slice(0, maxIndex),
        ...coins.slice(maxIndex + 1),
      ];
    }

    if (newPoints > points) {
      points = newPoints;
    }

    play(newCoins, newEnergy, newPoints, true);
    play(newCoins, newEnergy, newPoints, false);
  };

  play(coinBag, energy)

  return points;
};

module.exports = getMaxPoints;
