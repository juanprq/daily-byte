const getOpenLockers = (n) => {
  const lockers = [];
  let open = true;

  for (let i = 1; i <= n; i++) {
    if (open) {
      for (let j = 0; j < n; j+=i) {
        lockers[j] = true;
      }
    } else {
      for (let j = n - 1; j >=0; j -= i) {
        lockers[j] = false;
      }
    }

    open = !open;
  }

  return lockers.filter(a => a).length;
};

module.exports = getOpenLockers;
