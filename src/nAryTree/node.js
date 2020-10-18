class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(data) {
    const newChild = new Node(data);
    this.children.push(newChild);

    return newChild;
  }
}

module.exports = Node;
