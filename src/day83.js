const isPrime = (n) => {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false
  }

  return true;
}

const getPrimesUntilN = (n) => {
  let count = 0;

  for (let i = 1; i < n; i++) {
    if (isPrime(i)) count++;
  }

  return count;
};

module.exports = getPrimesUntilN;
