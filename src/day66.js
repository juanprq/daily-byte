const sum = array => array.reduce((a, b) => a + b, 0);

const makeChange = (coins, amount) => {
  const aux = (sum = 0, n = 0) => {
    if (sum > amount) return Infinity;
    if (sum === amount) return n;

    const result = coins.map((coin) => {
      return aux(sum + coin, n + 1);
    });

    return Math.min(...result);
  }

  return aux();

  // const results = [];
  // let i = 0;
  // const aux = (currentCoins = []) => {
  //   i++;
  //   if (i > 1000000) return;
  //   if (sum(currentCoins) > amount) return;
  //   if (sum(currentCoins) === amount) {
  //     results.push(currentCoins);
  //     console.log(currentCoins.length);
  //     return;
  //   }

  //   coins.map(coin => aux([...currentCoins, coin]));
  // };

  // aux();
  // // console.log(results);

  // return Math.min(...results.map(r => r.length));
};

module.exports = makeChange;
