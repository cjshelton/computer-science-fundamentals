class Queue<T> {
    items: T[];
    maxSize: number;

    constructor(maxSize: number) {
        if (maxSize <= 0) {
            throw new Error('Queue must have a max of size 1 or greater.');
        }

        this.items = [];
        this.maxSize = maxSize;
    }

    get length() {
        return this.items.length;
    }

    enqueue(item: T) {
        if (this.isFull()) {
            throw new Error(
                'Cannot push onto the queue: The queue is at max capacity.'
            );
        }

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

    isFull(): boolean {
        return this.items.length === this.maxSize;
    }
}

export default Queue;
