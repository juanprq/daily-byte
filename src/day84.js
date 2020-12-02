// I need to convert this to be iterative
// how I can do that?
const traverse = (root) => {
  if (!root) return [];

  return [
    ...traverse(root.left),
    root.data,
    ...traverse(root.right),
  ];
};

module.exports = traverse;
