const generateMatrix = (rows, cols) => {
  let result = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (result[i]) {
        result[i][j] = 0;
      } else {
        result[i] = [0];
      }
    }
  }

  return result;
};

const minimizePath = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = generateMatrix(rows, cols);

  const traverse = (i = 0, j = 0) => {
    if (i >= rows || j >= cols) return Infinity;
    if (visited[i][j] !== 0) return visited[i][j];
    if (i === rows - 1 && j === cols -1) return grid[i][j];

    const current = grid[i][j];
    const result = Math.min(
      current + traverse(i + 1, j), // move to down
      current + traverse(i, j + 1), // move to right
    );

    visited[i][j] = result;
    return result;
  };

  return traverse();
};

module.exports = minimizePath;
