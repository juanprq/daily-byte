const getMaxIndex = (array) => array
  .reduce((currentIndex, value, index) => {
    const currentMax = array[currentIndex] || -Infinity;
    return currentMax < value ? index : currentIndex;
  }, -1);

const deleteElementAt = (index, array) => {
  const value = array[index];
  const newArray = [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];

  return [value, newArray];
};

const getTwoMaxes = (array) => {
  const maxIndex1 = getMaxIndex(array);
  const [max1, auxArray] = deleteElementAt(maxIndex1, array);

  const maxIndex2 = getMaxIndex(auxArray);
  const [max2, newArray] = deleteElementAt(maxIndex2, auxArray);

  return [max1, max2, newArray];
};

const smash = (stone1, stone2) => Math.abs(stone1 - stone2);

const smashStones = (stones) => {
  if (stones.length === 0) return 0;
  if (stones.length === 1) return stones[0];

  const [max1, max2, newArray] = getTwoMaxes(stones);
  const newStone = smash(max1, max2);

  if (newStone === 0) return smashStones(newArray);
  return smashStones([...newArray, newStone]);
};

module.exports = smashStones;
