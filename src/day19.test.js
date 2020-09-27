const isCircular = require('./day19');
const Node = require('./linkedList/node');
const LinkedList = require('./linkedList');

describe('isCircular', () => {
  test('should return true', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;
    node3.next = node1;

    const list = new LinkedList(node1);
    expect(isCircular(list)).toBe(true);
  });

  test('should return false', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;

    const list = new LinkedList(node1);
    expect(isCircular(list)).toBe(false);
  });

  test('should return true', () => {
    const node1 = new Node(1);

    node1.next = node1;
    const list = new LinkedList(node1);
    expect(isCircular(list)).toBe(true);
  });
});
