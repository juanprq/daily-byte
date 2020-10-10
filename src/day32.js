const Node = require('./binaryTree/node');
const BinaryTree = require('./binaryTree');

const buildBinaryTree = (array) => {
  if (array.length === 1) {
    return new BinaryTree(
      new Node(array[0]),
    );
  }

  const midIndex = parseInt(array.length / 2);
  const midItem = array[midIndex];

  const head = new Node(midItem);

  const [leftData] = array.slice(0, midItem - 1);
  const [rightData] = array.slice(midItem);

  head.addLeft(leftData);
  head.addRight(rightData);

  return new BinaryTree(head);
};

module.exports = buildBinaryTree;
