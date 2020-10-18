const Node = require('./node');

describe('Node', () => {
  test('should be a Node instance', () => {
    expect(new Node()).toBeInstanceOf(Node);
  });

  test('should has empty children', () => {
    const node = new Node();
    expect(node.children).toEqual([]);
  });

  test('should has correct data', () => {
    const node = new Node(3);
    expect(node.data).toEqual(3);
  });

  test('it should be able add child', () => {
    const node = new Node();
    expect(node.addChild).toBeInstanceOf(Function);
  })

  test('it should add a new child', () => {
    const node = new Node();
    const child = node.addChild(5);

    expect(child).toBeInstanceOf(Node);
    expect(child.data).toEqual(5);
    expect(node.children.includes(child)).toBe(true);
  });
});
