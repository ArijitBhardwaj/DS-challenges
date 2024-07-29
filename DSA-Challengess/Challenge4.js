//Part1
class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue1.push(x);
    }

    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        let poppedElement = this.queue1.shift();
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
        return poppedElement;
    }

    top() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        let topElement = this.queue1.shift();
        this.queue2.push(topElement);
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
        return topElement;
    }

    empty() {
        return this.queue1.length === 0;
    }
}

// Example usage:
let myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top());    // return 2
console.log(myStack.pop());    // return 2
console.log(myStack.empty());  // return false

//Part2
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.cache = new Map();
        this.head = new Node(null, null); // Dummy head node
        this.tail = new Node(null, null); // Dummy tail node
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next.prev = node;
        this.head.next = node;
    }

    _removeNode(node) {
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    _moveToHead(node) {
        this._removeNode(node);
        this._addNode(node);
    }

    _popTail() {
        let res = this.tail.prev;
        this._removeNode(res);
        return res;
    }

    get(key) {
        let node = this.cache.get(key);
        if (!node) {
            return -1;
        }
        this._moveToHead(node);
        return node.value;
    }

    put(key, value) {
        let node = this.cache.get(key);

        if (!node) {
            let newNode = new Node(key, value);
            this.cache.set(key, newNode);
            this._addNode(newNode);
            this.size++;

            if (this.size > this.capacity) {
                let tail = this._popTail();
                this.cache.delete(tail.key);
                this.size--;
            }
        } else {
            node.value = value;
            this._moveToHead(node);
        }
    }
}

// Example usage:
let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1));    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4

//Part3

class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x) {
        this.stack1.push(x);
    }

    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage:
let myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2]
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false
