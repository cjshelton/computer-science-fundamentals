class DoublyLinkedListNode<T> {
    value: T;
    next: DoublyLinkedListNode<T>;
    prev: DoublyLinkedListNode<T>;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export default DoublyLinkedListNode;
