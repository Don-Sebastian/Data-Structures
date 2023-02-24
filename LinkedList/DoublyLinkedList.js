class Node{
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            return this;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }
    doublyLinkedListFromArray(list, value) {
        const newNode = new Node(value);
        if (!list) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        list = this.head;
        return list;
    }
    traverseToIndex(index) {
        let currentNode = this.head;
        let counter = 1;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    deleteAtIndex(index) {
        if (index > this.length) return -1; 
        let previousNode = this.traverseToIndex(index - 1);
        let removedNode = previousNode.next;
        let follower = removedNode.next;
        follower.prev = removedNode.prev;
        previousNode.next = follower;
        this.length--;
        return removedNode;
        
    }
    // insertBefore(index, data) {
    //     const newNode = new Node(data);
    //     let currentNode = this.traverseToIndex(index);
    //     if (currentNode.next) {
    //         newNode.next = currentNode.prev.next;
    //         newNode.prev = currentNode.prev;
    //         currentNode.prev.next = newNode;
    //     } else {
    //         newNode.prev = this.tail;
    //         this.tail.next = newNode;
    //         this.tail = newNode;
    //     }
    //     this.length++;
    // }
    insertBeforeIndex(index, value) {
        if (index >= this.length) return this.append(value);
        const newNode = new Node(value);
        const prevNode = this.traverseToIndex(index - 1);
        const follower = prevNode.next;

        newNode.next = follower;
        newNode.prev = prevNode;
        follower.prev = newNode;
        prevNode.next = newNode;
        this.length++;
    }
    // insertAfter(index, data) {
    //     const newNode = new Node(data);
    //     let currentNode = this.traverseToIndex(index - 1);
    //     if (currentNode.next){
    //         newNode.next = currentNode.next;
    //         newNode.prev = currentNode.next.prev;
    //         currentNode.next = newNode;
    //         currentNode.next.prev = newNode;;
            
    //     } else {
    //         newNode.prev = this.tail;
    //         this.tail.next = newNode;
    //         this.tail = newNode;
    //     }
    //     this.length++;

    // }
    insertAfterIndex(index, value) {
        const newNode = new Node(value);
        if (index >= this.length) return this.append(value);
        const leader = this.traverseToIndex(index);
        const follower = leader.next;

        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        leader.next = newNode;
        this.length++;
    }
    printDoubleLinkedList() {
        let array = [];
        let arrayReverse = [];
        let currentNode = this.head;
        console.log(this.head)
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        let lastNode = this.tail;
        while (lastNode) {
            arrayReverse.push(lastNode.value);
            lastNode = lastNode.prev;
        }
        console.log(array);
        console.log(arrayReverse);
    }
}

const obj = new DoublyLinkedList();
// obj.append(10);
// obj.append(20);
// obj.append(30);
// obj.prepend(5);

let arrayList = [11, 20, 25, 35]
let list = null;
for (let i = 0; i < arrayList.length; i++){
    list = obj.doublyLinkedListFromArray(list, arrayList[i]);
}
obj.deleteAtIndex(1)
obj.insertBeforeIndex(2, 67)
obj.insertAfterIndex(3, 98)


obj.printDoubleLinkedList();