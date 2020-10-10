const buildBinaryTree = require('./day32');
const BinaryTree = require('./binaryTree');

describe('buildBinaryTree', () => {
  test('should build a 3 node tree', () => {
    const array = [1, 2, 3];

    const result = buildBinaryTree(array);
    expect(result).toBeInstanceOf(BinaryTree);
    expect(result.head.data).toEqual(2);
    expect(result.head.left.data).toEqual(1);
    expect(result.head.right.data).toEqual(3);
    expect(result.head.left.isLeaf()).toBe(true);
    expect(result.head.right.isLeaf()).toBe(true);
  });

  // test('should build a 6 node tree', () => {
  //   const array = [1, 2, 3, 4, 5, 6];
  // });
});
