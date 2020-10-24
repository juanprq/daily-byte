const validateBinaryTree = require('./day46');
const Node = require('./binaryTree/node');

describe('validateBinaryTree', () => {
  test('should be a function', () => {
    expect(validateBinaryTree).toBeInstanceOf(Function);
  });

  test('should return false', () => {
    const head = new Node(1);
    head.addLeft(2);
    head.addRight(3);

    expect(validateBinaryTree(head)).toBe(false);
  });

  test('should return true', () => {
    const head = new Node(2);
    head.addLeft(1);
    head.addRight(3);

    expect(validateBinaryTree(head)).toBe(true);
  });
});
