const findMiddle = (list) => {
  let node = list.head;
  let middle = node;

  while(node) {
    if (node.next) {
      node = node.next.next;
      middle = middle.next;
    } else {
      node = node.next;
    }
  }

  return middle.data;
};

module.exports = findMiddle;
