const generateParenthesis = (n) => {
  const result = [];

  const generate = (open, openParenthesis, accum = '') => {
    if (openParenthesis < 0) return;
    if ((accum.length === 2 * n) && openParenthesis === 0) {
      result.push(accum);
      return;
    }
    if (accum.length >= 2 * n) return;

    const currentParenthesis = open ? '(' : ')';
    const sum = open ? 1 : -1;
    generate(true, openParenthesis + sum, accum + currentParenthesis);
    generate(false, openParenthesis + sum, accum + currentParenthesis);
  };
  generate(true, 0);

  return [...new  Set(result)];
};

module.exports = generateParenthesis;
