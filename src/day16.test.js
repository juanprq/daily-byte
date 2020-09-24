const Node = require('./linkedList/node');
const LinkedList = require('./linkedList');
const removeNthToLast = require('./day16');

describe('removeNthToLast', () => {

  let list;

  beforeEach(() => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;

    list = new LinkedList(node1);
  });

  test('remove from 1', () => {
    const newList = removeNthToLast(list, 1);

    expect(list.head.data).toEqual(1);
    expect(list.head.next).toEqual(null);
  });

  test('remove from 2', () => {
    const newList = removeNthToLast(list, 2);

    expect(list.head.data).toEqual(1);
    expect(list.head.next.data).toEqual(2);
    expect(list.head.next.next).toEqual(null);
  });
});
