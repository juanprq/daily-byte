const getBottomUpLevels = require('./day39');
const Node = require('./binaryTree/node');
const BinaryTree = require('./binaryTree');

describe('getBottonUpLevels', () => {
  test('it should be a function', () => {
    expect(getBottomUpLevels).toBeInstanceOf(Function);
  });

  test('it should return two levels', () => {
    const head = new Node(2);
    head.addLeft(1);
    head.addRight(2);

    const binaryTree = new BinaryTree(head);
    expect(getBottomUpLevels(binaryTree)).toEqual([[1, 2], [2]]);
  });

  test('it should return 3 levels', () => {
    const head = new Node(7);

    const node6 = head.addLeft(6);
    head.addRight(2);

    node6.addLeft(3);
    node6.addRight(3);

    const binaryTree = new BinaryTree(head);
    expect(getBottomUpLevels(binaryTree)).toEqual([[3, 3], [6, 2], [7]]);
  });
});
