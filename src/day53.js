const { fillMatrix } = require('./util');

const searchGold = (goldMine) => {
  const rows = goldMine.length;
  const cols = goldMine[0].length;
  const blockingPath = fillMatrix(rows, cols);

  const maxPath = (row, col) => {
    if (row < 0 || row >= rows) return 0;
    if (col < 0 || col >= cols) return 0;
    if (blockingPath[row][col]) return 0;
    if (goldMine[row][col] === 0) return 0;

    const currentValue = goldMine[row][col];
    blockingPath[row][col] = true;

    const max = Math.max(
      maxPath(row + 1, col),
      maxPath(row - 1, col),
      maxPath(row, col + 1),
      maxPath(row, col - 1),
    );

    blockingPath[row][col] = false;

    return currentValue + max;
  }


  const possibleValues = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      possibleValues.push(maxPath(i, j));
    }
  }

  return Math.max(...possibleValues);
};

module.exports = searchGold;
