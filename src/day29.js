const BinaryTree = require('./binaryTree');

const findNode = (binaryTree, value) => {
  const currentNode = binaryTree.head;
  if (currentNode.data === value) return currentNode;

  if (value < currentNode.data && currentNode.left) {
    return findNode(new BinaryTree(currentNode.left), value);
  } if (value > currentNode.data && currentNode.right) {
    return findNode(new BinaryTree(currentNode.right), value);
  }

  return null;
};

module.exports = findNode;
