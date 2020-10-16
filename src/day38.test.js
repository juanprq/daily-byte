const getLeftViewNodes = require('./day38');
const Node = require('./binaryTree/node');
const BinaryTree = require('./binaryTree');

describe('getLeftViewNodes', () => {
  test('should be a function', () => {
    expect(getLeftViewNodes).toBeInstanceOf(Function);
  });

  test('should return [4, 2]', () => {
    const head = new Node(4);
    head.addLeft(2);
    head.addRight(7);

    const binaryTree = new BinaryTree(head);
    expect(getLeftViewNodes(binaryTree)).toEqual([4, 5])
  });

  test('should return [7, 4, 1, 9]', () => {
    const head = new Node(7);
    const node4 = head.addLeft(4);
    const node9 = head.addRight(9);

    node4.addLeft(1);
    node4.addRight(4);

    node9.addLeft(8);
    const node9B = node9.addRight(9);
    node9B.addRight(9);

    const binaryTree = new BinaryTree(head);
    expect(getLeftViewNodes(binaryTree)).toEqual([7, 4, 1, 9]);
  })
});
