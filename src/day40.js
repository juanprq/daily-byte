const getZigzagLevels = (node, levels, currentLevel = 0) => {
  if (!node) return;

  const level = levels[currentLevel] || [];
  level.push(node.data);
  levels[currentLevel] = level;

  if (currentLevel % 2 === 0 || currentLevel === 0) {
    getZigzagLevels(node.right, levels, currentLevel + 1);
    getZigzagLevels(node.left, levels, currentLevel + 1);
  } else {
    getZigzagLevels(node.left, levels, currentLevel + 1);
    getZigzagLevels(node.right, levels, currentLevel + 1);
  }
};

const zigzagTraverse = (binaryTree) => {
  const { head } = binaryTree;

  const levels = [];
  getZigzagLevels(head, levels);

  return levels;
};

module.exports = zigzagTraverse;
