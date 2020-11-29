const initializeMatrix = (rows, cols, initialValue = false) => {
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

const markFriends = (i, group, input, visited) => {
  const friends = input[i];
  let mark = false;

  for (let j = 0; j < friends.length; j++) {
    if (visited[i][j] !== 0) continue;

    if (input[i][j] === 1) {
      mark = true;
      visited[i][j] = group;
      markFriends(j, group, input, visited);
    }
  }

  return mark;
};

const findFriends = (input) => {
  const rows = input.length;
  const cols = input[0].length;

  const visitedMatrix = initializeMatrix(rows, cols, 0);
  let group = 1;

  for (let i = 0; i < rows; i++) {
    const marked = markFriends(i, group, input, visitedMatrix);
    if (marked) group++;
  }

  let max = 0;
  for (let i = 0; i < visitedMatrix.length; i++) {
    for (let j = 0; j < visitedMatrix[0].length; j++) {
      if (visitedMatrix[i][j] > max) {
        max = visitedMatrix[i][j];
      }
    }
  }

  return max;
};

module.exports = findFriends;
