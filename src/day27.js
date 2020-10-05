class MovingAverage {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = [];
  }

  next(value) {
    if (this.queue.length >= this.capacity) {
      this.queue.shift();
    }

    this.queue.push(value);

    return this.queue.reduce((accum, v) => accum + v) / this.queue.length;
  }
};

module.exports = MovingAverage;
