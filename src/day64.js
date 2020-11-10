const whoWins = (items) => {
  const players = [0, 0]

  const play = (currentItems, player = 0) => {
    if (currentItems.length === 0) return;
    const firstIndex = 0;
    const lastIndex = currentItems.length - 1;

    const maxIndex = currentItems[firstIndex] > currentItems[lastIndex]
      ? firstIndex
      : lastIndex;

    players[player] += currentItems[maxIndex];
    const newItems = maxIndex === firstIndex
      ? currentItems.slice(1)
      : currentItems.slice(0, lastIndex);
    const nextPlayer = player === 0 ? 1 : 0;

    play(newItems, nextPlayer);
  };
  play(items);

  return players[0] > players[1] ? 1 : 2;
};

module.exports = whoWins;
