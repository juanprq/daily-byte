const getCount = (node, level, accum = []) => {
  if (!node) return accum;

  const data = accum[level] || [];
  data.push(node.data);
  accum[level] = data;

  getCount(node.left, level + 1, accum);
  getCount(node.right, level + 1, accum);

  return accum;
};

const getLevels = (binaryTree) => {
  const { head } = binaryTree;

  return getCount(head, 0);
};

module.exports = getLevels;
