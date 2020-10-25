const compareTrees = (nodeA, nodeB) => {
  const dataA = nodeA ? nodeA.data : null;
  const dataB = nodeB ? nodeB.data : null;

  if (dataA === null && dataB === null) return true;
  if (dataA !== dataB) return false;
  return dataA === dataB
    && compareTrees(nodeA.left, nodeB.right)
    && compareTrees(nodeA.right, nodeB.left);
};

const isSimetrical = (head) => {
  const { left, right } = head;

  const result = compareTrees(left, right);
  return result;
};

module.exports = isSimetrical;
