const traverse = require('./day84');
const Node = require('./binaryTree/node');

describe('traverse', () => {
  test('it should be a function', () => {
    expect(traverse).toBeInstanceOf(Function);
  });

  test('it should return [1, 2, 3]', () => {
    const tree = new Node(2);
    tree.addLeft(1);
    tree.addRight(3);

    expect(traverse(tree)).toEqual([1, 2, 3]);
  });

  test('it should return [4, 1, 8, 2, 7]', () => {
    const tree = new Node(2);
    const node1 = tree.addLeft(1);

    tree.addRight(7);
    node1.addLeft(4);
    node1.addRight(8);

    expect(traverse(tree)).toEqual([4, 1, 8, 2, 7]);
  });
});
