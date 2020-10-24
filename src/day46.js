const validateBinaryTree = (node) => {
  if (!node) return true;
  if (node.isLeaf()) return true;

  const { data } = node;
  const leftData = node.left ? node.left.data : -Infinity;
  const rightData = node.right ? node.right.data : Infinity;

  return leftData < data
    && data < rightData
    && validateBinaryTree(node.left)
    && validateBinaryTree(node.right);
};

module.exports = validateBinaryTree;
