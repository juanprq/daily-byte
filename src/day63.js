const CAPACITY = 5000;

const sum = array => array.reduce((a, b) => a + b, 0);

const maximizeBricks = (bricks) => {
  let maximum = 0;

  const aux = (currentBricks, accum = []) => {
    if (sum(accum) >= CAPACITY) return;
    if (maximum < accum.length) {
      maximum = accum.length;
    }
    if (currentBricks.length === 0) return;

    const [head, ...rest] = currentBricks;
    aux(rest, [head, ...accum]);
    aux(rest, accum);
  };

  aux(bricks);

  return maximum;
};

module.exports = maximizeBricks;
