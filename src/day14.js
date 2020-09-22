const getNonCommonWords = (sentence1, sentence2) => {
  const words = [
    ...sentence1.split(' '),
    ...sentence2.split(' '),
  ];

  const wordsCount = words.reduce((accum, word) => ({
    ...accum,
    [word]: accum[word] ? accum[word] + 1 : 1,
  }), {});

  return Object
    .entries(wordsCount)
    .filter(([_, count]) => count === 1)
    .map(([word]) => word);
};

module.exports = getNonCommonWords;
