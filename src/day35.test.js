const getMode = require('./day35');
const Node = require('./binaryTree/node');
const BinaryTree = require('./binaryTree');

describe('getMode', () => {
  test('should be a function', () => {
    expect(getMode).toBeInstanceOf(Function);
  });

  test('should return "2"', () => {
    const head = new Node(2);
    head.addLeft(1);
    head.addRight(2);

    const binaryTree = new BinaryTree(head);
    expect(getMode(binaryTree)).toEqual(2);
  });

  test('should return "9"', () => {
    const head = new Node(7);
    const node4 = head.addLeft(4);
    const node9 = head.addRight(9);

    node4.addLeft(1);
    node4.addRight(4);

    node9.addLeft(8);
    const node9B = node9.addRight(9);
    node9B.addRight(9);

    const binaryTree = new BinaryTree(head);
    expect(getMode(binaryTree)).toEqual(9);
  });
});
