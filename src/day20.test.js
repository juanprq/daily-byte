const getFirstInCycle = require('./day20');
const Node = require('./linkedList/node');
const LinkedList = require('./linkedList');

describe('getFirstInCycle', () => {
  test('should return null', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;

    const list = new LinkedList(node1);
    expect(getFirstInCycle(list)).toBe(null);
  });

  test('should return node 2', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node2;

    const list = new LinkedList(node1);
    expect(getFirstInCycle(list)).toBe(node2);
  });

  test('should return node 7', () => {
    const node1 = new Node(1);
    const node2 = new Node(9);
    const node3 = new Node(3);
    const node4 = new Node(7);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node4;

    const list = new LinkedList(node1);
    expect(getFirstInCycle(list)).toBe(node4);
  });
});
