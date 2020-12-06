const initialize = (rows, cols) => {
  const result = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (result[i]) {
        result[i][j] = false;
      } else {
        result[i] = [false];
      }
    }
  }

  return result;
};

const getNumberOfIslands = (space) => {
  const rows = space.length;
  const cols = space[0].length;

  const isValidPosition = (i, j) =>
    i >= 0 && j >=0 && i < rows && j < cols;
  const visited = initialize(rows, cols);

  const searchIsland = (i, j) => {
    if (!isValidPosition(i, j)) return false;
    if (visited[i][j]) return false;
    if (space[i][j] !== 1) return false;

    visited[i][j] = true;
    return true
      | searchIsland(i + 1, j)
      | searchIsland(i, j + 1)
      | searchIsland(i - 1, j)
      | searchIsland(i, j - 1);
  };

  let islands = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const result = searchIsland(i, j);
      if (result) {
        islands++;
      }
    }
  }


  return islands;
};

module.exports = getNumberOfIslands;
