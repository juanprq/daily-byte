const sumBinary = (a, b) => {
  const intA = parseInt(a, 2);
  const intB = parseInt(b, 2);

  return (intA + intB).toString(2);
};

module.exports = sumBinary;
