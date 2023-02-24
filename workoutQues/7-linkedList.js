// 10--> 15--> 12

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }
    insert(index, value) {
        const newNode = {
            value: value,
            next: null
        }
        if (index >= this.length) {
            return this.append(value);
        }
        const leader = this.traversalToIndex(index - 1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
    }
    traversalToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        const leader = this.traversalToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return unwantedNode;
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let currentNode = this.head;
        this.tail = this.head;
        let nextNode = currentNode.next;
        while (nextNode) {
            const temp = nextNode.next; 
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = temp;
        }
        this.head.next = null;
        this.head = currentNode;
        return this;    
    }

    
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(15)
myLinkedList.append(20);
myLinkedList.prepend(1);

myLinkedList.insert(2, 13)
// myLinkedList.reverse()
// const deleted = myLinkedList.remove(1);
myLinkedList.printList();
console.log(myLinkedList);
