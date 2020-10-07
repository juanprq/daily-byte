const BinaryTree = require('./binaryTree');

const sortBinaryTree = (binaryTree) => {
  const { head } = binaryTree;

  if (!head) return [];
  if (head.isLeaf()) return [head.data];

  const sortedLeft = sortBinaryTree(new BinaryTree(head.left));
  const sortedRight = sortBinaryTree(new BinaryTree(head.right));
  return [...sortedLeft, head.data, ...sortedRight];
};

module.exports = sortBinaryTree;
