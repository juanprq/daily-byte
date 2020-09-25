const Node = require('./node');

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

  add(data) {
    const node = new Node(data);
    if (this.head) {
      const lastNode = this.getLast();
      lastNode.next = node;
    } else {
      this.head = node;
    }

    return this;
  }

  print() {
    let string = '';
    let node = this.head;

    while(node) {
      string += `${node.data}->`;
      node = node.next;
    }

    string += 'null';
    return string;
  }
}

module.exports = LinkedList;
