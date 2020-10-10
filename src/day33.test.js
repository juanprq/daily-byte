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

  test('should return false', () => {
    const nodeA1 = new Node(1);
    const nodeA2 = nodeA1.addRight(9);
    nodeA2.addRight(18);

    const nodeB1 = new Node(1);
    const nodeB2 = nodeB1.addLeft(9);
    nodeB2.addRight(18);


    const binaryTreeA = new BinaryTree(nodeA1);
    const binaryTreeB = new BinaryTree(nodeB1);

    expect(isEqual(binaryTreeA, binaryTreeB)).toBe(false);
  });

  test('should return false', () => {
    const nodeA1 = new Node(2);
    nodeA1.addLeft(3);
    nodeA1.addRight(1);

    const nodeB1 = new Node(2);
    nodeB1.addLeft(1);
    nodeB1.addRight(3);


    const binaryTreeA = new BinaryTree(nodeA1);
    const binaryTreeB = new BinaryTree(nodeB1);

    expect(isEqual(binaryTreeA, binaryTreeB)).toBe(false);
  });
});
