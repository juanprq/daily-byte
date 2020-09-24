const removeNthToLast = (list, n) => {
  let node = list.head;
  for(let i = 0; i < n - 1; i++) {
    node = node.next;
  }

  node.next = null;

  return list;
};

module.exports = removeNthToLast;
