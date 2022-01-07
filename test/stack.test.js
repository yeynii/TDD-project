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
    expect(stack.size()).toBe(2);
  });

  describe("pop", () => {
    it("empty error", () => {
      expect(() => stack.pop()).toThrow('빈 스택');
      expect(() => stack.pop()).toThrow();
      expect(() => stack.pop()).toThrow(new Error('빈 스택입니다.'));
    });

    it("allows to pop", () => {
        stack.push(1);
        expect(stack.pop()).toBe(1);
        expect(stack.size()).toBe(0);
    })
  });

  describe('peek', () => {
    it("empty error", () => {
      expect(() => stack.peek()).toThrow(new Error('빈 스택입니다.'));
    });

    it("allows to peek", () => {
        stack.push(1);
        expect(stack.peek()).toBe(1);
        expect(stack.size()).toBe(1);
    })

  })

});