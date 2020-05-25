import SinglyLinkedList from '../../../src/linked-lists/SinglyLinkedList';

describe('SinglyLinkedList', () => {
    describe('initialisation', () => {
        test('no items are in the list', () => {
            const linkedList = new SinglyLinkedList<number>();

            expect(linkedList.isEmpty).toBeTruthy();
            expect(linkedList.head).toBeNull();
            expect(linkedList.tail).toBeNull();
        });
    });

    describe('push', () => {
        test('it sets the head and tail to be the same when adding the first item', () => {
            const linkedList = new SinglyLinkedList<number>();

            linkedList.push(1);

            expect(linkedList.length).toBe(1);
            expect(Object.is(linkedList.head, linkedList.tail)).toBe(true);
        });

        test('it updates the tail when adding to a list with at least one item in it', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.push(1);

            linkedList.push(3);

            expect(linkedList.length).toBe(2);
            expect(Object.is(linkedList.head, linkedList.tail)).toBe(false);
            expect(linkedList.head.value).toBe(1);
            expect(linkedList.tail.value).toBe(3);
        });
    });

    describe('pop', () => {
        test('it returns null when no items are in the list', () => {
            const linkedList = new SinglyLinkedList<number>();

            const poppedItem: number = linkedList.pop();

            expect(poppedItem).toBeNull();
        });

        test('it returns the item when only one item exists in the list', () => {
            const linkedList = new SinglyLinkedList<string>();
            linkedList.push('foo');

            const poppedItem: string = linkedList.pop();

            expect(poppedItem).toBe('foo');
            expect(linkedList.isEmpty).toBeTruthy();
        });

        test('it resets the head and tail when only one item exists in the list', () => {
            const linkedList = new SinglyLinkedList<string>();
            linkedList.push('foo');

            linkedList.pop();

            expect(linkedList.isEmpty).toBeTruthy();
            expect(linkedList.head).toBeNull();
            expect(linkedList.tail).toBeNull();
        });

        test('it sets the head and tail to be the same when two items exists in the list', () => {
            const linkedList = new SinglyLinkedList<string>();
            linkedList.push('foo');
            linkedList.push('bar');

            linkedList.pop();

            expect(linkedList.length).toBe(1);
            expect(Object.is(linkedList.head, linkedList.tail)).toBe(true);
        });

        test('it returns the tail when more than one items exist in the list', () => {
            const linkedList = new SinglyLinkedList<string>();
            linkedList.push('foo');
            linkedList.push('bar');
            linkedList.push('fooBar');

            const poppedItem: string = linkedList.pop();

            expect(linkedList.length).toBe(2);
            expect(poppedItem).toBe('fooBar');
        });
    });

    describe('get', () => {
        test('it fails when the list is empty', () => {
            const linkedList = new SinglyLinkedList<number>();

            expect(() => linkedList.get(0)).toThrow();
        });

        test('it fails when the index is out of bounds', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.push(1);

            expect(() => linkedList.get(-1)).toThrow();
            expect(() => linkedList.get(1)).toThrow();
        });

        test('it gets the item at the index', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);

            const firstItem = linkedList.get(0);
            const secondItem = linkedList.get(1);
            const thirdItem = linkedList.get(2);

            expect(firstItem).toBe(1);
            expect(secondItem).toBe(2);
            expect(thirdItem).toBe(3);
        });
    });
});
