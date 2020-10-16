const getFirst = (node, level, accum = []) => {
  if (!node) return accum;

  const data = accum[level];

  if (!data) {
    accum[level] = node.data;
  }

  getFirst(node.left, level + 1, accum);
  getFirst(node.right, level + 1, accum);

  return accum;
};

const getLeftViewNodes = (binaryTree) => {
  const { head } = binaryTree;

  return getFirst(head, 0);
};

module.exports = getLeftViewNodes;
