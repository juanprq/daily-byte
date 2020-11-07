const balanceFoods = (items) => {
  let count = 0;
  let stack = [];

  items
    .split('')
    .forEach(item => {
      if (item === 'F') {
        stack.push(item);
      } else if (stack[0] === 'F') {
        stack.pop();
        if (stack.length === 0) {
          count++;
        }
      }
    });

  return count;
};

module.exports = balanceFoods;
