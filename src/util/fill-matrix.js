const fillMatrix = (rows, cols, value = false) => {
  const result = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      if (result[i]) {
        result[i][j] = value;
      } else {
        result[i] = [value];
      }
    }
  }

  return result;
};

module.exports = fillMatrix;
