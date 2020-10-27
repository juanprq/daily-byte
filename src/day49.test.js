const sumLeftLeaves = require('./day49');
const Node = require('./binaryTree/node');

describe('sumLeftLeaves', () => {
  test('should be a function', () => {
    expect(sumLeftLeaves).toBeInstanceOf(Function);
  });

  test('should return 5', () => {
    const head = new Node(5);
    head.addLeft(2);
    const node12 = head.addRight(12);

    node12.addLeft(3);
    node12.addRight(8);

    expect(sumLeftLeaves(head)).toEqual(5);
  });

  test('should return 3', () => {
    const head = new Node(2);
    const node4 = head.addLeft(4);
    head.addRight(4);

    node4.addLeft(3);
    node4.addRight(9);

    expect(sumLeftLeaves(head)).toEqual(3);
  });
});
