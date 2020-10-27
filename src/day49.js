const sumLeftLeaves = (node, isLeft = false) => {
  if (!node) return 0;
  if (node.isLeaf() && isLeft) {
    return node.data;
  }
  if (node.isLeaf()) return 0;

  return sumLeftLeaves(node.left, true) + sumLeftLeaves(node.right);
};

module.exports = sumLeftLeaves;
