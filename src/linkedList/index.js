class LinkedList {
  constructor(head) {
    this.head = head;
  }

  size() {
    let node = this.head;
    let size = 0;
    while(node) {
      size += 1;
      node = node.next;
    }

    return size;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let node = this.head;

    while(node && node.next) {
      node = node.next;
    }
    return node;
  }

  getFirst() {
    return this.head;
  }
}

module.exports = LinkedList;
