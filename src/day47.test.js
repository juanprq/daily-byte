const isSimetrical = require('./day47');
const Node = require('./binaryTree/node');

describe('isSimetrical', () => {
  test('it should be a function', () => {
    expect(isSimetrical).toBeInstanceOf(Function);
  });

  test('it should return true', () => {
    const head = new Node(2);
    head.addLeft(1);
    head.addRight(1);

    expect(isSimetrical(head)).toBe(true);
  });

  test('it should return false', () => {
    const head = new Node(1);

    const node5A = head.addLeft(5);
    node5A.addRight(7);

    const node5B = head.addRight(5);
    node5B.addRight(5);

    expect(isSimetrical(head)).toBe(false);
  });
});
