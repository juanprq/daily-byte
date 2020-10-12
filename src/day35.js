const countModes = (node, modes) => {
  if (!node) return;

  const { data } = node;
  modes[data] = modes[data] ? modes[data] + 1 : 1;
  countModes(node.left, modes);
  countModes(node.right, modes);
}

const getMode = (binaryTree) => {
  const { head } = binaryTree;
  if (!head) return -1;

  const modes = {};
  countModes(head, modes);

  const maxS = Object
    .entries(modes)
    .reduce((max, [data, count]) => {
      if (count > (modes[max] || -1)) {
        return data;
      }

      return max;
    }, -1);

  return parseInt(maxS, 10);
}

module.exports = getMode;
