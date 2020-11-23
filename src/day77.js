const stealGallery = (w, weights, values) => {

  const aux = (currentCharge = 0, currentIndex = 0) => {
    if (currentIndex >= weights.length) return 0;

    const currentWeight = weights[currentIndex];
    if (currentCharge + currentWeight > w) return 0;

    return Math.max(
      values[currentIndex] + aux(currentCharge + currentWeight, currentIndex + 1),
      aux(currentCharge, currentIndex + 1),
    );
  };

  return aux();
};

module.exports = stealGallery;
