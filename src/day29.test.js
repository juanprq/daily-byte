const BinaryTree = require('./binaryTree');
const Node = require('./binaryTree/node');
const findNode = require('./day29');

describe('findNode', () => {

  test('should find node "1"', () => {
    const node3 = new Node(3);
    const node1 = node3.addLeft(1);
    const node4 = node3.addRight(4);

    const binaryTree = new BinaryTree(node3);
    expect(findNode(binaryTree, 1)).toBe(node1);
  });

  test('should find node "9"', () => {
    const node7 = new Node(7);
    const node5 = node7.addLeft(5);
    const node9 = node7.addRight(9);
    const node8 = node9.addLeft(8);
    const node10 = node9.addRight(10);

    const binaryTree = new BinaryTree(node7);
    expect(findNode(binaryTree, 9)).toBe(node9);
  });

  test('should not find node for value "7"', () => {
    const node8 = new Node(8);
    const node6 = node8.addLeft(6);
    const node9 = node8.addRight(9);

    const binaryTree = new BinaryTree(node8);
    expect(findNode(binaryTree, 7)).toBeNull();
  });

});
