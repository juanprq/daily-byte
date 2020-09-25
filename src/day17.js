const removeValue = (list, valueToRemove) => {
  let node = list.head;
  let prev;

  while (node) {
    if (node.data === valueToRemove) {
      if (prev) {
        prev.next = node.next;
      } else {
        list.head = node.next;
      }
    } else {
      prev = node;
    }

    node = node.next;
  }

  return list;
};

module.exports = removeValue;
