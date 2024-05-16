class Jar {
  constructor(capacity = 12) {
    if (!Number.isInteger(capacity) || capacity < 0) {
      throw new ValueError("Capacity should be a non-negative integer");
    }
    this._capacity = capacity;
    this._size = 0;
  }

  toString() {
    return "🍪".repeat(this._size);
  }

  deposit(n) {
    if (!Number.isInteger(n) || n < 0) {
      throw new ValueError(
        "Number of cookies should be a non-negative integer"
      );
    }
    if (this._size + n > this._capacity) {
      throw new ValueError("Exceeds the jar capacity");
    }
    this._size += n;
  }

  withdraw(n) {
    if (!Number.isInteger(n) || n < 0) {
      throw new ValueError(
        "Number of cookies should be a non-negative integer"
      );
    }
    if (this._size < n) {
      throw new ValueError("Not enough cookies in the jar");
    }
    this._size -= n;
  }

  get capacity() {
    return this._capacity;
  }

  get size() {
    return this._size;
  }
}

class ValueError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValueError";
  }
}

export { Jar, ValueError };
