const initializeMatrix = (rows, cols, initialValue) => {
  const result = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (result[i]) {
        result[i][j] = initialValue;
      } else {
        result[i] = [initialValue];
      }
    }
  }

  return result;
}

const updateRabbitPaths = (input) => {
  const rows = input.length;
  const cols = input[0].length;
  const visited = initializeMatrix(rows, cols, false);

  const isValidPosition = (i, j) =>
    (i >= 0 && i < rows && j >= 0 && j < cols);
  const getPathLength = (i, j) => {
    if (!isValidPosition(i, j)) return Infinity;
    if (visited[i][j]) return Infinity;
    if (input[i][j] > 1) return input[i][j];
    if (input[i][j] === -1) return Infinity;
    if (input[i][j] === 0) return 0;

    visited[i][j] = true;
    const result = 1 + Math.min(
      getPathLength(i + 1, j),
      getPathLength(i - 1, j),
      getPathLength(i, j + 1),
      getPathLength(i, j - 1),
    );

    visited[i][j] = false;

    return result;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const pathLength = getPathLength(i, j);
      if (pathLength !== Infinity) {
        input[i][j] = pathLength;
      }
    }
  }

  return input;
};

module.exports = updateRabbitPaths;
