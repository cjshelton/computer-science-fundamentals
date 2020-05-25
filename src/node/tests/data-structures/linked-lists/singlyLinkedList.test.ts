import SinglyLinkedList from '../../../src/linked-lists/SinglyLinkedList';

describe('SinglyLinkedList', () => {
    describe('initialisation', () => {
        test('no items are in the list', () => {
            const linkedList = new SinglyLinkedList<number>();

            expect(linkedList.isEmpty()).toBeTruthy();
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
        test('it fails when the list is empty', () => {
            const linkedList = new SinglyLinkedList<number>();

            expect(() => linkedList.pop()).toThrow();
        });

        test('it returns the item when only one item exists in the list', () => {
            const linkedList = new SinglyLinkedList<string>();
            linkedList.push('foo');

            const poppedItem: string = linkedList.pop();

            expect(poppedItem).toBe('foo');
            expect(linkedList.isEmpty()).toBeTruthy();
        });

        test('it resets the head and tail when only one item exists in the list', () => {
            const linkedList = new SinglyLinkedList<string>();
            linkedList.push('foo');

            linkedList.pop();

            expect(linkedList.isEmpty()).toBeTruthy();
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
        test('it gets the item at the index', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);

            const firstItem = linkedList.get(0);
            const secondItem = linkedList.get(1);
            const thirdItem = linkedList.get(2);

            expect(firstItem.value).toBe(1);
            expect(secondItem.value).toBe(2);
            expect(thirdItem.value).toBe(3);
        });

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
    });

    describe('delete', () => {
        test('it deletes the item when there is only one item', () => {
            const linkedList = new SinglyLinkedList<object>();
            linkedList.push({
                foo: 'bar',
            });

            linkedList.delete(0);

            expect(linkedList.isEmpty()).toBeTruthy();
            expect(linkedList.head).toBeNull();
            expect(linkedList.tail).toBeNull();
        });

        test('it fails when the list is empty', () => {
            const linkedList = new SinglyLinkedList<number>();

            expect(() => linkedList.delete(0)).toThrow();
        });

        test('it fails when the index is out of bounds', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.push(1);

            expect(() => linkedList.delete(-1)).toThrow();
            expect(() => linkedList.delete(1)).toThrow();
        });

        test('it updates the head when the first item is deleted', () => {
            const linkedList = new SinglyLinkedList<object>();

            const itemOne = { foo: 'bar' };
            const itemTwo = { bar: 'foo' };
            linkedList.push(itemOne);
            linkedList.push(itemTwo);

            linkedList.delete(0);

            expect(linkedList.length).toBe(1);
            expect(Object.is(linkedList.head.value, itemTwo)).toBe(true);
        });

        test('it updates the tail when the last item is deleted', () => {
            const linkedList = new SinglyLinkedList<object>();

            const itemOne = { foo: 'bar' };
            const itemTwo = { bar: 'foo' };
            linkedList.push(itemOne);
            linkedList.push(itemTwo);

            linkedList.delete(1);

            expect(linkedList.length).toBe(1);
            expect(Object.is(linkedList.tail.value, itemOne)).toBe(true);
        });

        test('it deletes the item at the index from the middle of the list', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);

            linkedList.delete(1);

            expect(linkedList.length).toBe(2);
            expect(linkedList.get(1).value).toBe(3);
        });
    });
});
