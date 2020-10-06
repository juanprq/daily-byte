class Queue {
  constructor() {
    this.data = [];
  }

  queue(value) {
    this.data.push(value);
  }

  dequeue() {
    return this.data.shift();
  }
}

class QueueStack {

  constructor() {
    this.queue = new Queue();
  }

  push(value) {
    this.queue.queue(value);
  }

  pop() {
    const auxQueue = new Queue();
    let value = this.queue.dequeue();
    let last;

    while (value) {
      last = value;

      value = this.queue.dequeue();
      if (value) {
        auxQueue.queue(last);
      }
    }

    this.queue = auxQueue;
    return last;
  }

  peek() {
    const auxQueue = new Queue();
    let value = this.queue.dequeue();
    let last;

    while (value) {
      last = value;
      auxQueue.queue(value);

      value = this.queue.dequeue();
    }

    this.queue = auxQueue;
    return last;
  }
};

module.exports = QueueStack;
