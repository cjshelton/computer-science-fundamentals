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
            return null;
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

    isEmpty(): boolean {
        return this.length === 0;
    }
}

export default SinglyLinkedList;