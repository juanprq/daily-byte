const getLeafPaths = require('./day44');
const Node = require('./binaryTree/node');

describe('getLeafPaths', () => {
  test('it should be a function', () => {
    expect(getLeafPaths).toBeInstanceOf(Function);
  });

  test('it should return 2 paths', () => {
    const head = new Node(1);
    head.addLeft(2);
    head.addRight(3);

    expect(getLeafPaths(head)).toEqual([[1, 2], [1, 3]]);
  });

  test('it should return 3 paths', () => {
    const head = new Node(8);
    head.addLeft(2);
    const node29 = head.addRight(29);
    node29.addLeft(3);
    node29.addRight(9);

    expect(getLeafPaths(head)).toEqual([
      [8, 2],
      [8, 29, 3],
      [8, 29, 9],
    ])
  });
});
