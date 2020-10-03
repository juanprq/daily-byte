class CallCounter {
  PERIOD_RANGE = 3000;
  calls = [];

  ping(timestamp) {
    this.calls.push(timestamp);
    const lowerBound = timestamp - this.PERIOD_RANGE;
    return this.calls
      .filter(call => call >= lowerBound)
      .length;
  }
}

module.exports = CallCounter;
