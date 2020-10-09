const findPath = (binaryTree, value) => {
  let node = binaryTree.head;
  let path = {};

  while (node) {
    path[node.data] = node;

    if (node.data === value) break;
    if (value < node.data) {
      node = node.left;
    } else {
      node = node.right;
    }
  };

  return path;
};

const findCommonAncestor = (binaryTree, a, b) => {
  const pathA = findPath(binaryTree, a);
  const pathB = findPath(binaryTree, b);

  const keysA = Object.keys(pathA);
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (pathB[key]) {
      return pathB[key];
    }
  }

  return null;
}

module.exports = findCommonAncestor;
