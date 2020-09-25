const removeValue = require('./day17');
const LinkedList = require('./linkedList');
const Node = require('./linkedList/node');

describe('removeValue', () => {
  test('should return 1->2', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;

    const list = new LinkedList(node1);
    const result = removeValue(list, 2);

    expect(result.head).toBe(node1);
    expect(result.head.next).toBe(node3);
    expect(result.head.next.next).toBeNull();
  });

  test('should return 8->4->12', () => {
    const node1 = new Node(8);
    const node2 = new Node(1);
    const node3 = new Node(1);
    const node4 = new Node(4);
    const node5 = new Node(12);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    const list = new LinkedList(node1);
    const result = removeValue(list, 1);

    expect(result.head).toBe(node1);
    expect(result.head.next).toBe(node4);
    expect(result.head.next.next).toBe(node5);
    expect(result.head.next.next.next).toBeNull();
  });

  test('should return 12->2->9', () => {
    const node1 = new Node(7);
    const node2 = new Node(12);
    const node3 = new Node(2);
    const node4 = new Node(9);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;

    const list = new LinkedList(node1);
    const result = removeValue(list, 7);

    expect(result.head).toBe(node2);
    expect(result.head.next).toBe(node3);
    expect(result.head.next.next).toBe(node4);
    expect(result.head.next.next.next).toBeNull();
  });

});
