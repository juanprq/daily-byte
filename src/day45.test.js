const pathExists = require('./day45');
const Node = require('./binaryTree/node');

describe('pathExists', () => {
  test('it should be a function', () => {
    expect(pathExists).toBeInstanceOf(Function);
  });

  test('it should return true', () => {
    const head = new Node(1);
    const node5 = head.addLeft(5);
    const node2 = head.addRight(2);

    node5.addLeft(1);
    node2.addLeft(12);
    node2.addRight(29);

    expect(pathExists(head, 15)).toBe(true);
  });

  test('it should return true', () => {
    const head = new Node(104);
    const node39 = head.addLeft(39);
    const node31 = head.addRight(31);

    node39.addLeft(32);
    node39.addRight(1);

    node31.addLeft(9);
    node31.addRight(10);

    expect(pathExists(head, 175)).toBe(true);
  });
});
