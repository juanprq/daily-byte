const getDepth = (node) => {
  if (!node) return 0;

  return 1 + Math.max(
    getDepth(node.left),
    getDepth(node.right),
  );
};

module.exports = getDepth;
