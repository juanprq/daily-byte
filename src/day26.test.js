const CallCounter = require('./day26');

describe('CallCounter', () => {

  let callCounter;

  beforeEach(() => {
    callCounter = new CallCounter();
  });

  test('should exists', () => {
    expect(callCounter).toBeInstanceOf(CallCounter);
  });

  test('should have ping method', () => {
    expect(callCounter.ping).toBeInstanceOf(Function);
  });

  test('ping should return last 3 calls in 3000 milisecons', () => {
    expect(callCounter.ping(1)).toEqual(1);
    expect(callCounter.ping(300)).toEqual(2);
    expect(callCounter.ping(3000)).toEqual(3);
    expect(callCounter.ping(3002)).toEqual(3);
    expect(callCounter.ping(7000)).toEqual(1);
  });
});
