const initializeBlockedPaths = (rows, cols) => {
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
}

const searchPath = (letters, wordLetters, blockedPath, row, col, currentIndex) => {
  const currentLetter = wordLetters[currentIndex];

  if (row < 0 || row > letters.length - 1) return false;
  if (col < 0 || col > letters[0].length - 1) return false;
  if (blockedPath[row][col]) return false;
  if (currentLetter !== letters[row][col]) return false;
  if (currentIndex === wordLetters.length - 1) return true;

  blockedPath[row][col] = true;
  return searchPath(letters, wordLetters, blockedPath, row + 1, col, currentIndex + 1)
    || searchPath(letters, wordLetters, blockedPath, row - 1, col, currentIndex + 1)
    || searchPath(letters, wordLetters, blockedPath, row, col + 1, currentIndex + 1)
    || searchPath(letters, wordLetters, blockedPath, row, col - 1, currentIndex + 1)
};

const pathExists = (letters, word) => {
  const wordLetters = word.split('');
  const rows = letters.length;
  const cols = letters[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const blockedPath = initializeBlockedPaths(rows, cols);
      const exists = searchPath(letters, wordLetters, blockedPath, i, j, 0);

      if (exists) return true;
    }
  }

  return false;
};

module.exports = pathExists;
