const QueueStack = require('./day28');

describe('QueueStack', () => {

  let queueStack;

  beforeEach(() => {
    queueStack = new QueueStack();
  });

  test('should be a class', () => {
    expect(queueStack).toBeInstanceOf(QueueStack);
  });

  test('should respond to push', () => {
    expect(queueStack.push).toBeInstanceOf(Function);
  });

  test('should respond to pop', () => {
    expect(queueStack.pop).toBeInstanceOf(Function);
  });

  test('should respond to peek', () => {
    expect(queueStack.peek).toBeInstanceOf(Function)
  });

  test('should behave like a stack', () => {
    queueStack.push(1);
    queueStack.push(2);
    queueStack.push(3);

    expect(queueStack.peek()).toEqual(3);
    expect(queueStack.pop()).toEqual(3);

    expect(queueStack.peek()).toEqual(2);

    queueStack.push(4);
    expect(queueStack.pop()).toEqual(4);
  });

});
