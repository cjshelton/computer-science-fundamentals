import Queue from '../../../src/queues/Queue';

describe('Queue', () => {
    describe('initialisation', () => {
        test('no items are in the queue', () => {
            const queue = new Queue(1);

            expect(queue.length).toBe(0);
        });

        test('cannot create a queue with a negative capacity', () => {
            expect(() => new Queue(-1)).toThrow();
        });

        test('cannot create a queue with zero capacity', () => {
            expect(() => new Queue(0)).toThrow();
        });
    });

    describe('enqueue', () => {
        test('it adds an item to the queue when not at max capacity', () => {
            const queue = new Queue<string>(1);

            queue.enqueue('a');

            expect(queue.length).toBe(1);
        });

        test('it fails to add an item to the queue when at max capacity', () => {
            const queue = new Queue<string>(1);
            queue.enqueue('a');

            expect(() => queue.enqueue('a')).toThrow();
        });
    });

    describe('dequeue', () => {
        test('it removes an item from the front of the queue', () => {
            const queue = new Queue<string>(2);
            queue.enqueue('a');
            queue.enqueue('b');

            const dequeuedItem = queue.dequeue();

            expect(queue.length).toBe(1);
            expect(dequeuedItem).toBe('a');
        });

        test('it removes items in the order they were added to the queue', () => {
            const queue = new Queue<object>(3);
            const itemOne = { foo: 'bar' };
            const itemTwo = { bar: 'foo' };
            const itemThree = { fooBar: 'fooBar' };

            queue.enqueue(itemOne);
            queue.enqueue(itemTwo);
            queue.enqueue(itemThree);

            const firstPoppedItem = queue.dequeue();
            const secondPoppedItem = queue.dequeue();
            const thirdPoppedItem = queue.dequeue();

            expect(firstPoppedItem).toEqual(itemOne);
            expect(secondPoppedItem).toEqual(itemTwo);
            expect(thirdPoppedItem).toEqual(itemThree);
            expect(queue.isEmpty).toBeTruthy();
        });

        test('it fails to remove an item when the queue is empty', () => {
            const queue = new Queue<string>(1);

            expect(queue.isEmpty).toBeTruthy();
            expect(() => queue.dequeue()).toThrow();
        });
    });

    describe('peek', () => {
        test('it returns the first element from the queue without removing it', () => {
            const queue = new Queue<boolean>(2);
            queue.enqueue(true);
            queue.enqueue(false);

            const peekedItem = queue.peek();

            expect(peekedItem).toBeTruthy();
            expect(queue.length).toBe(2);
        });

        test('it fails to peek an item when the queue is empty', () => {
            const queue = new Queue<string>(1);

            expect(queue.isEmpty).toBeTruthy();
            expect(() => queue.peek()).toThrow();
        });
    });
});
