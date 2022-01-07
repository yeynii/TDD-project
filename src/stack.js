class Stack {
  constructor() {
    this.array = new Array();
  }

  push(item) {
    this.array[this.array.length] = item;
  }

  pop() {
    if (this.array.length == 0)
      throw new Error("빈 스택에서 pop 할 수 없습니다.");
    const poped = this.array[0];
    delete this.array[0];
    return poped;
  }
}

module.exports = Stack;
