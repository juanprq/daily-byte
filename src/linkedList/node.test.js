const Node = require('./node');

describe('node', () => {
  test('default node', () => {
    const node = new Node(1);
    expect(node.data).toEqual(1);
  });

  test('next node', () => {
    const node2 = new Node(2);
    const node1 = new Node(1, node2);

    expect(node1.next).toBe(node2);
    expect(node1.next.data).toBe(2);
  });
});
