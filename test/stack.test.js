const Stack = requied('../src/stack.js');

describe('stack test', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    })
    it('push', () => {
        stack.push(1);
        expect(stack[0]).toBe(1);
    });
    it('pop', () => {
        stack.push(2);
        expect(stack.pop()).toBe(2);
    });
});