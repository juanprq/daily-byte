const getLevels = (node, levels, currentLevel = 0) => {
  if (!node) return [];

  if (levels[currentLevel]) {
    levels[currentLevel].push(node.data);
  } else {
    levels[currentLevel] = [node.data];
  }

  getLevels(node.left, levels, currentLevel + 1);
  getLevels(node.right, levels, currentLevel + 1);
};

const getBottomUpLevels = (binaryTree) => {
  const { head } = binaryTree;

  const levels = []
  getLevels(head, levels);

  return levels.reduce((accum, value) => [value, ...accum], []);
};

module.exports = getBottomUpLevels;
