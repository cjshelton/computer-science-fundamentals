import DynamicStack from '../../../src/stacks/DynamicStack';

describe('DynamicStack', () => {
    describe('initialisation', () => {
        test('no items are on the stack', () => {
            const stack = new DynamicStack();

            expect(stack.length).toBe(0);
        });
    });

    describe('push', () => {
        test('it adds an item to the stack', () => {
            const stack = new DynamicStack<number>();

            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.length).toBe(3);
        });
    });

    describe('pop', () => {
        test('it removes an item from the top of the stack', () => {
            const stack = new DynamicStack<object>();
            const itemOne = { foo: 'bar' };
            const itemTwo = { bar: 'foo' };

            stack.push(itemOne);
            stack.push(itemTwo);

            const poppedItem = stack.pop();

            expect(poppedItem).toEqual(itemTwo);
        });

        test('it fails to remove an item when the stack is empty', () => {
            const stack = new DynamicStack<object>();

            expect(() => stack.pop()).toThrow();
        });
    });

    describe('peek', () => {
        test('it returns an item from the stack without removing it', () => {
            const stack = new DynamicStack<object>();
            const item = { foo: 'bar' };
            stack.push(item);

            const peekedItem = stack.peek();

            expect(peekedItem).toEqual(item);
            expect(stack.length).toBe(1);
        });

        test('it fails to peek an item when the stack is empty', () => {
            const stack = new DynamicStack<object>();

            expect(() => stack.peek()).toThrow();
        });
    });

    describe('isEmpty', () => {
        test('is true when length is zero', () => {
            const stack = new DynamicStack<object>();

            expect(stack.length).toEqual(0);
            expect(stack.isEmpty()).toBeTruthy();
        });

        test('is false when length is not zero', () => {
            const stack = new DynamicStack<string>();
            const item = 'foo';
            stack.push(item);

            expect(stack.length).not.toEqual(0);
            expect(stack.isEmpty()).not.toBeTruthy();
        });
    });
});
