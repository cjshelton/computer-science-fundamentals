import DynamicStack from './DynamicStack';

class Stack<T> extends DynamicStack<T> {
    maxSize: number;
    topIndex: number;

    constructor(maxSize: number) {
        super();

        this.maxSize = maxSize;
        this.topIndex = -1;
    }

    push(item: T): void {
        if (this.isFull()) {
            throw new Error(
                'Cannot push onto the stack: The stack is at max capacity.'
            );
        }

        this.items.push(item);
        this.topIndex++;
    }

    pop(): T {
        const item: T = super.pop();
        this.topIndex--;

        return item;
    }

    isFull(): boolean {
        return this.topIndex === this.maxSize - 1;
    }
}

export default Stack;
