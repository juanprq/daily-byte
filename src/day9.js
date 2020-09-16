const countMatches = (jewels, stones) => {
  const counter = jewels.split('').reduce((accum, jewel) => ({ ...accum, [jewel]: true }), {})
  return stones.split('').reduce((accum, stone) =>
    (counter[stone] ? accum + 1 : accum),
    0,
  );
};

module.exports = countMatches;
