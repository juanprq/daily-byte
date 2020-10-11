const buildArray = (node) => {
  if (!node) return [];
  if (node.isLeaf()) return [node.data];

  return [
    node.data,
    ...buildArray(node.left),
    ...buildArray(node.right),
  ];
};

const buildDifferences = (array) => {
  return array.reduce((accum, value) => {
    const diffs = array.reduce((differences, value2) => {
      if (value2 !== value) return [...differences, Math.abs(value - value2)];
      return differences;
    }, []);

    return [...accum, ...diffs];
  },
  []);
};

const min = (array) =>
  array.reduce((min, value) => (value < min ? value : min));

const minDifference = (tree) => {
  const { head } = tree;
  const array = buildArray(head);
  const differences = buildDifferences(array);

  return min(differences);
};

module.exports = minDifference;
