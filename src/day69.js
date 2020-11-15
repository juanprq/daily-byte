const canJump = (stones) => {

  const aux = ([head, ...remainingStones], lastJump = 0) => {
    if (head - lastJump > 1) return false;
    if (remainingStones.length === 0) return true;

    return aux(remainingStones, head);
  };

  return aux(stones);
};

module.exports = canJump;
