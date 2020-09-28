const getFirstInCycle = (list) => {
  const data = {};
  let node = list.head;

  while (node) {
    if (data[node.data]) return data[node.data];

    data[node.data] = node;
    node = node.next;
  }

  return null;
};

module.exports = getFirstInCycle;
