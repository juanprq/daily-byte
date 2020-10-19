const getColumns = require('./day42');
const Node = require('./binaryTree/node');

describe('getColumns', () => {
  test('it should be a function', () => {
    expect(getColumns).toBeInstanceOf(Function);
  });

  test('it should return 4 columns', () => {
    const head = new Node(8);
    head.addLeft(2);
    const node29 = head.addRight(29);

    node29.addLeft(3);
    node29.addRight(9);

    expect(getColumns(head)).toEqual([[2], [8, 3], [29], [9]]);
  });

  test('it should return columns', () => {
    const head = new Node(100);
    const node53 = head.addLeft(53);
    const node78 = head.addRight(78);

    node53.addLeft(32);
    node53.addRight(3);

    node78.addLeft(9);
    node78.addRight(20);

    expect(getColumns(head)).toEqual([[32], [53], [100, 3, 9], [78], [20]]);
  });
});
