const pathExists = (node, pathWeight, currentWeight = 0) => {
  if (!node) return false;

  const { data } = node;
  const newWeight = currentWeight + data;
  if (node.isLeaf()) {
    if (newWeight === pathWeight) return true;
    return false;
  }

  return pathExists(node.left, pathWeight, newWeight)
    || pathExists(node.right, pathWeight, newWeight);
};

module.exports = pathExists;
