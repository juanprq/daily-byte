const getDepth = require('./day43');
const Node = require('./binaryTree/node');

describe('getDepth', () => {
  test('it should be a function', () => {
    expect(getDepth).toBeInstanceOf(Function);
  });

  test('it should return 2', () => {
    const head = new Node(9);
    head.addLeft(1);
    head.addRight(2);

    expect(getDepth(head)).toEqual(2);
  });

  test('it should return 3', () => {
    const head = new Node(5);
    head.addLeft(1);
    const node29 = head.addRight(29);

    node29.addLeft(4);
    node29.addRight(13);

    expect(getDepth(binaryTree)).toEqual(3);
  });
});
