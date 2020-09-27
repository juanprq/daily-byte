const isCircular = (list) => {
  const stored = {};
  let node = list.head;

  while(node) {
    if (stored[node.data]) {
      return true;
    }

    stored[node.data] = true;
    node = node.next;
  }

  return false;
};

module.exports = isCircular;
