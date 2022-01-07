const Stack = require("../src/stack.js");

describe("stack test", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("push", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.array).toStrictEqual([1, 2]);
  });

  it("pop", () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });

  it("empty error", () => {
    expect(() => stack.pop()).toThrow('빈 스택');
    expect(() => stack.pop()).toThrow();
    expect(() => stack.pop()).toThrow(new Error('빈 스택에서 pop 할 수 없습니다.'));
  });
});