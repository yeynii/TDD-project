class Stack {
  constructor() {
    this.array = [];
  }

  size() {
      return this.array.length;
  }

  push(item) {
    this.array.push(item);
  }

  pop() {
    if (this.array.length === 0)
      throw new Error("빈 스택입니다.");
    return this.array.pop();
  }

  peek() {
    if (this.array.length === 0)
      throw new Error("빈 스택입니다.");
    return this.array[this.size() - 1];
  }
}

module.exports = Stack;
