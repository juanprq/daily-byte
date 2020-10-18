const zigzagTraverse = require('./day40');
const Node = require('./binaryTree/node');
const BinaryTree = require('./binaryTree');

describe('zigzagTraverse', () => {
  test('should be a function', () => {
    expect(zigzagTraverse).toBeInstanceOf(Function);
  });

  test('should return 2 levels', () => {
    const head = new Node(1);
    head.addLeft(2);
    head.addRight(3);

    const binaryTree = new BinaryTree(head);
    expect(zigzagTraverse(binaryTree)).toEqual([[1], [3, 2]]);
  });

  test('should return 3 levels', () => {
    const head = new Node(8);
    head.addLeft(2);
    const node29 = head.addRight(29);

    node29.addLeft(3);
    node29.addRight(9);

    const binaryTree = new BinaryTree(head);
    expect(zigzagTraverse(binaryTree)).toEqual([[8], [29, 2], [3, 9]]);
  });
});
