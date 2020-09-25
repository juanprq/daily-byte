const findMiddle = require('./day18');
const LinkedList = require('./linkedList');

describe('findMiddle', () => {

  test('should return 2', () => {
    const list = new LinkedList();
    list
      .add(1)
      .add(2)
      .add(3);

    expect(findMiddle(list)).toEqual(2);
  });

  test('should return 3', () => {
    const list = new LinkedList();
    list
      .add(1)
      .add(2)
      .add(3)
      .add(4);

    expect(findMiddle(list)).toEqual(3);
  });

  test('should return 1', () => {
    const list = new LinkedList();
    list
      .add(1);

    expect(findMiddle(list)).toEqual(1);
  });
});
