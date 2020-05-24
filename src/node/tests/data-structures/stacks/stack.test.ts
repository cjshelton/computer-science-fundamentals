import Stack from '../../../src/stacks/Stack';

describe('DynamicStack', () => {
    describe('initialisation', () => {
        test('no items are on the stack', () => {
            const stack = new Stack(1);

            expect(stack.length).toBe(0);
        });
    });

    describe('push', () => {
        test('it adds an item to the stack when not at max capacity', () => {
            const stack = new Stack<number>(2);

            stack.push(1);
            stack.push(2);

            expect(stack.length).toBe(2);
        });

        test('it fails to add an item to the stack when at max capacity', () => {
            const stack = new Stack<number>(2);
            stack.push(1);
            stack.push(2);

            expect(() => stack.push(3)).toThrow();
        });
    });

    describe('pop', () => {
        test('it removes an item from the top of the stack', () => {
            const stack = new Stack<object>(5);
            const itemOne = { foo: 'bar' };
            const itemTwo = { bar: 'foo' };

            stack.push(itemOne);
            stack.push(itemTwo);

            const poppedItem = stack.pop();

            expect(poppedItem).toEqual(itemTwo);
            expect(stack.length).toBe(1);
        });

        test('it removes items in the reverse order they were added to the stack', () => {
            const stack = new Stack<object>(5);
            const itemOne = { foo: 'bar' };
            const itemTwo = { bar: 'foo' };
            const itemThree = { fooBar: 'fooBar' };

            stack.push(itemOne);
            stack.push(itemTwo);
            stack.push(itemThree);

            const firstPoppedItem = stack.pop();
            const secondPoppedItem = stack.pop();
            const thirdPoppedItem = stack.pop();

            expect(firstPoppedItem).toEqual(itemThree);
            expect(secondPoppedItem).toEqual(itemTwo);
            expect(thirdPoppedItem).toEqual(itemOne);
            expect(stack.isEmpty).toBeTruthy();
        });

        test('it fails to remove an item when the stack is empty', () => {
            const stack = new Stack<object>(5);

            expect(() => stack.pop()).toThrow();
        });
    });

    describe('peek', () => {
        test('it returns an item from the stack without removing it', () => {
            const stack = new Stack<object>(3);
            const item = { foo: 'bar' };
            stack.push(item);

            const peekedItem = stack.peek();

            expect(peekedItem).toEqual(item);
            expect(stack.length).toBe(1);
        });

        test('it fails to peek an item when the stack is empty', () => {
            const stack = new Stack<object>(3);

            expect(() => stack.peek()).toThrow();
        });
    });

    describe('isEmpty', () => {
        test('is true when length is zero', () => {
            const stack = new Stack<object>(2);

            expect(stack.length).toEqual(0);
            expect(stack.isEmpty()).toBeTruthy();
        });

        test('is false when length is not zero', () => {
            const stack = new Stack<string>(10);
            const item = 'foo';
            stack.push(item);

            expect(stack.length).not.toEqual(0);
            expect(stack.isEmpty()).not.toBeTruthy();
        });
    });
});
