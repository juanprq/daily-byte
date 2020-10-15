const getMax = (node, level, accum = []) => {
  if (!node) return accum;

  const data = accum[level] || -1;

  if (node.data > data) {
    accum[level] = node.data;
  }

  getMax(node.left, level + 1, accum);
  getMax(node.right, level + 1, accum);

  return accum;
};

const getMaxPerLevel = (binaryTree) => {
  const { head } = binaryTree;

  return getMax(head, 0);
};

module.exports = getMaxPerLevel;
