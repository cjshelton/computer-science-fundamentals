class SinglyLinkedListNode<T> {
    value: T;
    next: SinglyLinkedListNode<T>;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default SinglyLinkedListNode;
