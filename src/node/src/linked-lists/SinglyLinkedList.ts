import SinglyLinkedListNode from '../linked-lists/SinglyLinkedListNode';

class SinglyLinkedList<T> {
    head: SinglyLinkedListNode<T>;
    tail: SinglyLinkedListNode<T>;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value: T): void {
        const node: SinglyLinkedListNode<T> = new SinglyLinkedListNode(value);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
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
            // Store a reference to the current tail so it can be returned.
            const currentTailNode = this.tail;

            let currentNode = this.head;
            while (currentNode) {
                if (currentNode.next === currentTailNode) {
                    break;
                }

                currentNode = currentNode.next;
            }

            // Updated the penultimate to be the new tail node.
            const penultimateNode: SinglyLinkedListNode<T> = currentNode;
            penultimateNode.next = null;
            this.tail = penultimateNode;

            this.length--;

            return currentTailNode.value;
        }
    }

    get(index: number): T {
        if (this.isEmpty() || index < 0 || index >= this.length) {
            throw new Error(
                `Cannot get item at index ${index}. It is out of bounds.`
            );
        }

        // If the last item is requested, we can skip traversing through the
        // list and just return the tail.
        if (index === this.length - 1) {
            return this.tail.value;
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode.value;
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
                this.length--;
            }

            return;
        }

        // The node before the one to delete is needed to the next pointer can be updated.
        const nodeBeforeIndex = this.getNodeBeforeIndex(index);
        const nodeToRemove = nodeBeforeIndex.next;

        // Check if the index is for the last node.
        if (index === this.length - 1) {
            // Set the second to last node as the new tail.
            nodeBeforeIndex.next = null;
            this.tail = nodeBeforeIndex;
            this.length--;

            return;
        }

        // Otherwise, set the next pointer to point to the node after the one to be deleted.
        nodeBeforeIndex.next = nodeToRemove.next;
        this.length--;
    }

    private getNodeBeforeIndex(index: number): SinglyLinkedListNode<T> {
        if (this.length <= 1) {
            throw new Error(
                `Cannot get node before index ${index}. List must have at least 2 items.`
            );
        }

        if (index >= this.length) {
            throw new Error(
                `Cannot get node before index ${index}. Index is out of bounds.`
            );
        }

        // The node before the first index is just the head.
        if (index === 1) {
            return this.head;
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        // Updated the penultimate to be the new tail node.
        return currentNode;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }
}

export default SinglyLinkedList;
