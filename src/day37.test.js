const getMaxPerLevel = require('./day37');
const Node = require('./binaryTree/node');
const BinaryTree = require('./binaryTree');

describe('getMaxPerLevel', () => {
  test('should be a function', () => {
    expect(getMaxPerLevel).toBeInstanceOf(Function);
  });

  test('should return 3 max', () => {
    const head = new Node(2);
    head.addLeft(10);
    const node15 = head.addRight(15);
    node15.addRight(20);

    const binaryTree = new BinaryTree(head);
    expect(getMaxPerLevel(binaryTree)).toEqual([2, 15, 20]);
  });

  test('should return 3 max', () => {
    const head = new Node(1);
    const node5 = head.addLeft(5);
    const node6 = head.addRight(6);

    node5.addLeft(5);
    node5.addRight(3);

    node6.addRight(7);

    const binaryTree = new BinaryTree(head);
    expect(getMaxPerLevel(binaryTree)).toEqual([1, 6, 7]);
  });
});
