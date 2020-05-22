class DynamicStack<T> {
    items: T[];

    constructor() {
        this.items = [];
    }

    get length(): number {
        return this.items.length;
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error('Cannot pop from the stack: The stack is empty.');
        }

        const item: T = this.items.pop();

        return item;
    }

    peek(): T {
        if (this.isEmpty()) {
            throw new Error('Cannot peep on the stack: The stack is empty.');
        }

        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

export default DynamicStack;
