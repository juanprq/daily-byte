const getLeaves = (node, leaves = []) => {
  if (!node) return;
  if (node.isLeaf()) {
    leaves.push(node.data);
    return;
  }

  if (node.left) {
    getLeaves(node.left, leaves);
  }

  if (node.right) {
    getLeaves(node.right, leaves);
  }

  return leaves;
};

const isEqual = (a, b) => {
  return a.reduce((accum, value, index) => {
    return accum && value === b[index];
  }, true);
};

const hasSameLeaves = (treeA, treeB) => {
  const leavesA = getLeaves(treeA);
  const leavesB = getLeaves(treeB);

  return isEqual(leavesA, leavesB);
};

module.exports = hasSameLeaves;
