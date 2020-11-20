const sort = (array) => {
  const copy = [...array];

  for (let i = 1; i < copy.length; i++) {
    for (let j = 0; j < i; j++) {
      if (copy[i] < copy[j]) {
        const aux = copy[j];
        copy[j] = copy[i];
        copy[i] = aux;
      }
    }
  }

  return copy;
};

module.exports = sort;
