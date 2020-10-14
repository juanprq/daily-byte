const getLevels = require('./day36');
const Node = require('./binaryTree/node');
const BinaryTree = require('./binaryTree');

describe('getLevels', () => {
  test('should be a function', () => {
    expect(getLevels).toBeInstanceOf(Function);
  });

  test('should return 2 levels', () => {
    const head = new Node(4);
    head.addLeft(2);
    head.addRight(7);

    const binaryTree = new BinaryTree(head);
    expect(getLevels(binaryTree)).toEqual([[4], [2, 7]]);
  });

  test('should return 3 levels', () => {
    const head = new Node(2);
    head.addLeft(10);
    const node15 = head.addLeft(15);
    node15.addRight(20);

    const binaryTree = new BinaryTree(head);
    expect(getLevels(binaryTree)).toEqual([[2], [10, 15], [20]]);
  });

  test('should return 3 levels', () => {
    const head = new Node(1);
    const nodeLeft = head.addLeft(9);
    const nodeRight = head.addRight(32);

    nodeLeft.addLeft(3);
    nodeRight.addRight(78);

    const binaryTree = new BinaryTree(head);
    expect(getLevels(binaryTree)).toEqual([[1], [9, 32], [3, 78]]);
  });
});
