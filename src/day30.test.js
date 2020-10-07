const sortBinaryTree = require('./day30');
const BinaryTree = require('./binaryTree');
const Node = require('./binaryTree/node');

describe('buildLinkedList', () => {

  test('should return sorted a sorted linked list with 3 elements', () => {
    const head = new Node(5);
    head.addLeft(1);
    head.addRight(6);

    binaryTree = new BinaryTree(head);
    const result = sortBinaryTree(binaryTree);
    expect(result).toEqual([1, 5, 6]);
  });

  test('should return when leaf', () => {
    const head = new Node(5);
    const binaryTree = new BinaryTree(head);

    expect(sortBinaryTree(binaryTree)).toEqual([5]);
  });

  test('should return in a large tree', () => {
    const head = new Node(5);
    const node2 = head.addLeft(2);
    head.addRight(9);
    node2.addLeft(1);
    node2.addRight(3);

    const binaryTree = new BinaryTree(head);
    const result = sortBinaryTree(binaryTree);
    expect(result).toEqual([1, 2, 3, 5, 9]);
  });

  test('should sort an unbalanced tree', () => {
    const head = new Node(5);
    head.addRight(6);

    const binaryTree = new BinaryTree(head);
    const result = sortBinaryTree(binaryTree);
    expect(result).toEqual([5, 6]);
  });
});
