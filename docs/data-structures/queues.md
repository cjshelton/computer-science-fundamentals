# Queues

- First In First Out (FIFO).
- Linear data structure / sequential collection.
- Picture a queue of people waiting to be served at a cashier. The first person to queue up gets served first. before anybody else after.
- **Limited access data structure** - elements can be added only to the back and removed only from the front.
- Supports 3 operations:
  1. **Enqueue** - adds a new item to the back of the queue.
  1. **Dequeue** - removes the item from the front of the queue.
  1. **Peek** - returns the item at the front of the queue, but does not remove it.
- A queue is a **recursive data structure** - when you call dequeue on a queue, the result is a smaller queue data structure.
- A queue is needed for implementing breadth-first search (BFS).
- Can be implemented in three ways:
  1. Linear Queue - Fixed memory allocation. When dequeued, the items can either shift towards the front of the queue to make better use of memory, or stay in-place, however the queue fills to max capacity quicker.
  1. Circular Queue - Allow memory to be re-used by allocating items to memory before the start of the queue.
  1. Priority Queue - Each item is assigned a priority, which acts as a weighting and determines what position of the queue the item belongs. This allows an item to be placed before another in the queue, even after being placed onto the queue after.

#### + Benefits

- Very performant for adding and removing items

#### - Downsides

- Limited to always working with the front and back of the queue.
- Not constant time for accessing the Nth item in the queue. In the worse case (accessing the first item), we have to iterate over every elements. So becomes O(n), where n is the number of items in the queue.

#### Practical Applications

- Keyboard buffer - Keystrokes should be stored in a queue, so that when they are applied, they are applied in the order in which the characters were typed.
- Printer queue - Printer jobs should be started in the order they were requested.

#### Implementations

Stacks can be implemented as arrays or linked lists.
