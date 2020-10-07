class Node {
  constructor(data) {
    this.data = data;

    this.left = null;
    this.right = null;
  }

  addLeft(data) {
    const node = new Node(data);
    this.left = node;

    return node;
  }

  addRight(data) {
    const node = new Node(data);
    this.right = node;

    return node;
  }

  isLeaf() {
    return !this.left && !this.right;
  }
}

module.exports = Node;
