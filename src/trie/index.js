const baseOffset = 'a'.charCodeAt();

class Node {
  constructor() {
    this.isEndOfWord = false;
    this.children = [];
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(key) {
    let currentNode = this.root;

    for (let i = 0; i < key.length; i++) {
      const index = key.charCodeAt(i) - baseOffset;
      if (!currentNode.children[index]) {
        currentNode.children[index] = new Node();
        currentNode = currentNode.children[index];
      }
    }

    currentNode.isEndOfWord = true;
  }

  search(key) {
    let currentNode = this.root;

    for (let i = 0; i < key.length; i++) {
      const index = key.charCodeAt(i) - baseOffset;
      if (!currentNode.children[index]) return false

      currentNode = currentNode.children[index];
    }

    return currentNode && currentNode.isEndOfWord;
  }
}

module.exports = Trie;
