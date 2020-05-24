class Queue<T> {
    items: T[];

    constructor() {
        this.items = [];
    }

    get length() {
        return this.items.length;
    }

    enqueue(item: T) {
        this.items.push(item);
    }

    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error('Cannot dequeue. The queue is empty.');
        }

        return this.items.shift();
    }

    peek(): T {
        if (this.isEmpty()) {
            throw new Error('Cannot peek from the queue. The queue is empty.');
        }

        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

export default Queue;
