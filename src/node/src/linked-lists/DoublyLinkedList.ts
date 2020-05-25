import DoublyLinkedListNode from '../linked-lists/DoublyLinkedListNode';

class DoublyLinkedList<T> {
    head: DoublyLinkedListNode<T>;
    tail: DoublyLinkedListNode<T>;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value: T): void {
        const node: DoublyLinkedListNode<T> = new DoublyLinkedListNode(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            const currentTail = this.tail;
            node.prev = currentTail;
            currentTail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error('Cannot pop from the linked list. It is empty.');
        } else if (this.length === 1) {
            const item = this.tail.value;
            this.head = null;
            this.tail = null;
            this.length--;

            return item;
        } else {
            const currentTail = this.tail;
            const newTail = this.tail.prev;

            newTail.next = null;
            this.tail = newTail;

            this.length--;

            return currentTail.value;
        }
    }

    delete(index: number): void {
        if (this.isEmpty() || index < 0 || index >= this.length) {
            throw new Error(
                `Cannot delete item at index ${index}. It is out of bounds.`
            );
        }

        // If the first item is requested, we can skip traversing through the
        // list and just update the head.
        if (index === 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }

            this.length--;

            return;
        }

        const nodeToRemove = this.get(index);
        const nodeBefore = nodeToRemove.prev;

        // Check if the index is for the last node.
        if (index === this.length - 1) {
            nodeBefore.next = null;
            this.tail = nodeBefore;
            this.length--;

            return;
        }

        // Otherwise, set the next pointer to point to the node after the one to be deleted.
        nodeBefore.next = nodeToRemove.next;
        nodeToRemove.next.prev = nodeBefore;

        this.length--;
    }

    get(index: number): DoublyLinkedListNode<T> {
        if (this.isEmpty() || index < 0 || index >= this.length) {
            throw new Error(
                `Cannot get item at index ${index}. It is out of bounds.`
            );
        }

        // If the last item is requested, we can skip traversing through the
        // list and just return the tail.
        if (index === this.length - 1) {
            return this.tail;
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }
}

export default DoublyLinkedList;
