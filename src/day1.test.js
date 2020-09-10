const reverse = require('./day1');

describe('day1', () => {
  test('should reverse Cat', () => {
    expect(reverse('Cat')).toEqual('taC');
  });

  test('should reverse "The Daily Byte"', () => {
    expect(reverse('The Daily Byte')).toEqual('etyB yliaD ehT');
  });

  test('should reverse Cat', () => {
    expect(reverse('civic')).toEqual('civic');
  });
});
