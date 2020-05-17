# Stacks

- Last In First Out (LIFO).
- Linear data structure / sequential collection.
- Picture a stack of plates or books. The top one (last one in) must be taken from the top first before retrieving the next.
- **Limited access data structure** - elements can be added and removed only from the top.
- Supports 3 operations:
  1. **Push** - adds a new item to the top of the stack.
  1. **Pop** - removes the item from the top of the stack.
  1. **Peek** - returns the item at the top of the stack, but does not remove it.
- A stack is a **recursive data structure** - when you call pop on a stack, the result is a smaller stack data structure.
- A stack is needed for implementing depth-first search (DFS).

#### + Benefits

- Very performant for adding and removing of the top item. Runs in **O(1)** time. This is because no items need to be shifted around.

#### - Downsides

- Limited to always working with the item at the top of the stack.
- Not constant time for accessing the Nth item in the stack. In the worse case (accessing the first item), we have to iterate over every elements. So becomes O(n), where n is the number of items in the stack.

#### Practical Applications

- Reversing a word - Push each letter onto the stack, and then pop them off. The result is the word backwards.
- "Undo" mechanism - Each action performed by the user is added to a stack. To undo the last action, you can pop off the item from the top of the stack, which will be the last action performed.
