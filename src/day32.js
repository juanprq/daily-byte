const Node = require('./binaryTree/node');
const BinaryTree = require('./binaryTree');

const buildNodes = (array) => {
  if (array.length === 0) return;
  if (array.length === 1) return new Node(array[0]);
  if (array.length === 2) {
    const head = new Node(array[1]);
    head.addLeft(array[0]);

    return head
  }

  const midIndex = parseInt(array.length / 2);
  const midItem = array[
    array.length % 2 === 0 ? midIndex - 1 : midIndex
  ];

  const head = new Node(midItem);

  const leftData = array.slice(0, midItem -1);
  const rightData = array.slice(midItem);

  head.left = buildNodes(leftData);
  head.right = buildNodes(rightData);

  return head;
};

const buildBinaryTree = (array) => {
  return new BinaryTree(buildNodes(array));
};

module.exports = buildBinaryTree;
