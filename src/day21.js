const reverse = (list) => {
  const stack = [];
  let node = list.head;

  while (node) {
    stack.push(node);
    node = node.next;
  }

  node = stack.pop();
  list.head = node;
  while (node) {
    const auxNode = node;
    node = stack.pop();
    auxNode.next = node;
  }

  return list;
};

module.exports = reverse;
