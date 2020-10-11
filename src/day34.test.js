const minDifference = require('./day34');
const BinaryTree = require('./binaryTree');
const Node = require('./binaryTree/node');

describe('minDifference', () => {
  test('should be a function', () => {
    expect(minDifference).toBeInstanceOf(Function);
  });

  test('should return 1', () => {
    const head = new Node(2);
    head.addLeft(3);
    head.addRight(1);

    const binaryTree = new BinaryTree(head);
    expect(minDifference(binaryTree)).toEqual(1);
  });

  test('should return 8', () => {
    const head = new Node(29);
    const node17 = head.addLeft(17);
    node17.addLeft(1);

    const node50 = head.addRight(50);
    node50.addLeft(42);
    node50.addRight(59);

    const binaryTree = new BinaryTree(head);
    expect(minDifference(binaryTree)).toEqual(8);
  });

  test('should return 98', () => {
    const head = new Node(2);
    head.addRight(100);

    const binaryTree = new BinaryTree(head);
    expect(minDifference(binaryTree)).toEqual(98);
  });

});
