const hasSameLeaves = require('./day48');
const Node = require('./binaryTree/node');

describe('hasSameLeaves', () => {
  test('it should be a function', () => {
    expect(hasSameLeaves).toBeInstanceOf(Function);
  });

  test('it should return false for different leaves', () => {
    const head1 = new Node(1);
    head1.addLeft(1);
    head1.addRight(3);

    const head2 = new Node(7);
    head2.addLeft(1);
    head2.addRight(2);

    expect(hasSameLeaves(head1, head2)).toBe(false);
  });

  test('it should return true', () => {
    const headA = new Node(8);
    headA.addLeft(2);
    const node29A = headA.addRight(29);
    node29A.addLeft(3);
    node29A.addRight(9);

    const headB = new Node(8);
    const node2B = headB.addLeft(2);
    node2B.addLeft(2);

    const node29B = headB.addRight(29);
    const node3B = node29B.addLeft(3);
    node29B.addRight(9);
    node3B.addRight(3);

    expect(hasSameLeaves(headA, headB)).toBe(true);
  });
});
