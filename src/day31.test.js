const findCommonAncestor = require('./day31');
const Node = require('./binaryTree/node');
const BinaryTree = require('./binaryTree');

describe('findCommonAncestor', () => {
  test('should return node 7', () => {
    const node7 = new Node(7);
    const node2 = node7.addLeft(2);
    node7.addRight(9);
    node2.addLeft(1);
    node2.addRight(5);

    const binaryTree = new BinaryTree(node7);
    const result = findCommonAncestor(binaryTree, 1, 9);
    expect(result).toBe(node7);
  });


  test('should return node 3', () => {
    const node8 = new Node(8);
    const node3 = node8.addLeft(3);
    node8.addRight(9);
    node3.addLeft(2);
    node3.addRight(6);

    const binaryTree = new BinaryTree(node8);
    const result = findCommonAncestor(binaryTree, 2, 6);
    expect(result).toBe(node3);
  });

  test('should return node 8', () => {
    const node8 = new Node(8);
    node8.addLeft(6);
    node8.addRight(9);

    const binaryTree = new BinaryTree(node8);
    const result = findCommonAncestor(binaryTree, 6, 9);
    expect(result).toBe(node8);
  });
});
