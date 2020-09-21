const collide = (a, b) => {
  const aAbs = Math.abs(a);
  const bAbs = Math.abs(b);
  if (aAbs === bAbs) return -1;
  if (aAbs > bAbs) return a;
  return b;
}

const canCollide = (a, b) => {
  if ((a * b) < 0) return true;
  return false;
};

const calculateCollition = (asteroids) => {
  let i = 0;
  const result = [...asteroids];

  while (i < result.length - 1) {
    const a = result[i];
    const b = result[i + 1];

    if (canCollide(a, b)) {
      const r = collide(a, b);

      if (r !== -1) {
        result[i] = r;
        result.splice(i + 1, 1);
      } else {
        result.splice(i, 2);
      }
    } else {
      i++;
    }
  }

  return result;
};

module.exports = calculateCollition;
