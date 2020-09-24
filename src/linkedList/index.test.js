const LinkedList = require('./index');
const Node = require('./node');

describe('linked list', () => {
  test('list with a single node', () => {
    const list = new LinkedList(new Node(1));
    expect(list.head.data).toEqual(1);
  });

  test('list with two items', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;

    const list = new LinkedList(node1);
    expect(list.head.next).toBe(node2);
  });

  test('size should be 3', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;

    const list = new LinkedList(node1);
    expect(list.size()).toEqual(3);
  });

  test('clear the list', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);

    node1.next = node2;

    const list = new LinkedList(node1);
    list.clear();
    expect(list.head).toBeNull();
  });

  test('getLast', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);

    node1.next = node2;

    const list = new LinkedList(node1);
    expect(list.getLast()).toBe(node2);
  });

  test('getFirst', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);

    node1.next = node2;

    const list = new LinkedList(node1);
    expect(list.getFirst()).toBe(node1);
  });

});
