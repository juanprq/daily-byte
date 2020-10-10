const isEqual = require('./day33');
const Node = require('./binaryTree/node');
const BinaryTree = require('./binaryTree');

describe('isEqual', () => {
  test('should be a function', () => {
    expect(isEqual).toBeInstanceOf(Function);
  });

  test('should return true', () => {
    const nodeA1 = new Node(2);
    nodeA1.addLeft(1);
    nodeA1.addRight(3);

    const nodeB1 = new Node(2);
    nodeB1.addLeft(1);
    nodeB1.addRight(3);

    const binaryTreeA = new BinaryTree(nodeA1);
    const binaryTreeB = new BinaryTree(nodeB1);

    expect(isEqual(binaryTreeA, binaryTreeB)).toBe(true);
  });
});
