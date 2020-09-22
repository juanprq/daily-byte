const getNonCommonWords = require('./day14');

describe('getNonCommonWords', () => {
  test('should return the quick brown fox', () => {
    const sentence1 = 'the quick';
    const sentence2 = 'brown fox';

    expect(getNonCommonWords(sentence1, sentence2)).toEqual(['the', 'quick', 'brown', 'fox']);
  });

  test('should return copper hot', () => {
    const sentence1 = 'copper coffee pot';
    const sentence2 = 'hot coffee pot';

    expect(getNonCommonWords(sentence1, sentence2)).toEqual(['copper', 'hot']);
  });
});
