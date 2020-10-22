const getPathAux = (node, currentPath, paths) => {
  if (!node) return;

  const { data } = node;
  const newPath = [...currentPath, data];
  if (node.isLeaf()) {
    paths.push(newPath);

    return;
  }

  getPathAux(node.left, newPath, paths);
  getPathAux(node.right, newPath, paths);
};

const getLeafPaths = (head) => {
  const paths = [];
  getPathAux(head, [], paths);
  return paths;
};

module.exports = getLeafPaths;
