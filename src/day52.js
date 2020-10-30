const { fillMatrix } = require('./util');

let blockedPath;

const searchPath = (letters, wordLetters, blockedPath, row, col, currentIndex) => {
  const currentLetter = wordLetters[currentIndex];

  if (row < 0 || row > letters.length - 1) return false;
  if (col < 0 || col > letters[0].length - 1) return false;
  if (blockedPath[row][col]) return false;
  if (currentLetter !== letters[row][col]) return false;
  if (currentIndex === wordLetters.length - 1) return true;

  blockedPath[row][col] = true;
  result = searchPath(letters, wordLetters, blockedPath, row + 1, col, currentIndex + 1)
    || searchPath(letters, wordLetters, blockedPath, row - 1, col, currentIndex + 1)
    || searchPath(letters, wordLetters, blockedPath, row, col + 1, currentIndex + 1)
    || searchPath(letters, wordLetters, blockedPath, row, col - 1, currentIndex + 1)

  blockedPath[row][col] = false;

  return result;
};

const pathExists = (letters, word) => {
  const wordLetters = word.split('');
  const rows = letters.length;
  const cols = letters[0].length;

  blockedPath = fillMatrix(rows, cols);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const exists = searchPath(letters, wordLetters, blockedPath, i, j, 0);

      if (exists) return true;
    }
  }

  return false;
};

module.exports = pathExists;
