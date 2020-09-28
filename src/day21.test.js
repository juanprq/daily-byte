const reverse = require('./day21');
const LinkedList = require('./linkedList');

describe('reverse', () => {
  test('should return 3->2->1->null', () => {
    const list = new LinkedList()
      .add(1)
      .add(2)
      .add(3);

    expect(reverse(list).print()).toEqual('3->2->1->null');
  });

  test('should return 2->9->15->7->null' , () => {
    const list = new LinkedList()
      .add(7)
      .add(15)
      .add(9)
      .add(2);

    expect(reverse(list).print()).toEqual('2->9->15->7->null');
  });

  test('should return 1->null', () => {
    const list = new LinkedList().add(1);

    expect(reverse(list).print()).toEqual('1->null');
  });
});
