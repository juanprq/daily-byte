const buildLevels = (node, levels, currentLevel = 0) => {
  if (!node) return;

  const level = levels[currentLevel] || [];
  level.push(node.data);
  levels[currentLevel] = level;

  node.children.forEach(currentNode =>
    buildLevels(currentNode, levels, currentLevel + 1),
  );
};

const getLevels = (head) => {
  const levels = [];

  buildLevels(head, levels);

  return levels;
};

module.exports = getLevels;
