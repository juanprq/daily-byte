const getLevels = require('./day41');
const Node = require('./nAryTree/node');

describe('getLevels', () => {
  test('shoud be a function', () => {
    expect(getLevels).toBeInstanceOf(Function);
  });

  test('it should return 2 levels', () => {
    const head = new Node(8);
    head.addChild(2);
    head.addChild(3);
    head.addChild(29);

    expect(getLevels(head)).toEqual([[8], [2, 3, 29]]);
  });

  test('it should return 3 levels', () => {
    const head = new Node(2);
    const node1 = head.addChild(1);
    const node6 = head.addChild(6);
    const node9 = head.addChild(9);

    node1.addChild(8);
    const node2 = node6.addChild(2);
    node9.addChild(2);

    node2.addChild(19);
    node2.addChild(12);
    node2.addChild(90);

    expect(getLevels(head)).toEqual([
      [2],
      [1, 6, 9],
      [8, 2, 2],
      [19, 12, 90],
    ]);
  });
});
