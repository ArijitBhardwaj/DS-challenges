//Ques 1

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    printList() {
        let current = this.head;
        let str = '';
        while (current !== null) {
            str += current.data + ' -> ';
            current = current.next;
        }
        console.log(str + 'null');
    }
}

function mergeTwoSortedLists(list1, list2) {
    let dummy = new Node(0);
    let tail = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.data <= list2.data) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    tail.next = (list1 !== null) ? list1 : list2;

    return dummy.next;
}

// Creating two sorted linked lists
let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

let list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);

list1.printList(); // 1 -> 3 -> 5 -> null
list2.printList(); // 2 -> 4 -> 6 -> null

// Merging the lists
let mergedListHead = mergeTwoSortedLists(list1.head, list2.head);

// Print merged list
let mergedList = new LinkedList();
mergedList.head = mergedListHead;
mergedList.printList(); // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null


//Ques 2

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    printList() {
        let current = this.head;
        let str = '';
        while (current !== null) {
            str += current.data + ' -> ';
            current = current.next;
        }
        console.log(str + 'null');
    }

    deleteNthFromEnd(n) {
        let dummy = new Node(0);
        dummy.next = this.head;
        let first = dummy;
        let second = dummy;

        for (let i = 0; i <= n; i++) {
            first = first.next;
        }

        while (first !== null) {
            first = first.next;
            second = second.next;
        }

        second.next = second.next.next;
        this.head = dummy.next;
        this.size--;
    }
}

// Creating a linked list
let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

linkedList.printList(); // 1 -> 2 -> 3 -> 4 -> 5 -> null

// Deleting the 2nd node from the end
linkedList.deleteNthFromEnd(2);

linkedList.printList(); // 1 -> 2 -> 3 -> 5 -> null
