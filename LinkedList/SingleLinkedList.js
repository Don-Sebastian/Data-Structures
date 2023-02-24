class SingleLinkedList{
    constructor(value) {
        let newNode = new Node()
        newNode.value = value;
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node();
        newNode.value = value;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node();
        newNode.value = value;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    printList() {
        console.log(this.head);
        let linkedlistArray = [];
        let currentNode = this.head;
        while (currentNode) {
            linkedlistArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(linkedlistArray);
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        let leader = this.traverseToIndex(index - 2);
        let removedNode = leader.next;
        leader.next = removedNode.next;
        removedNode.next = null;
        this.length--;
        return removedNode;

    }
    insertAfter(index, data) {
        if (index > this.length) return this.append(data);
        else {
            let leader = this.traverseToIndex(index - 1);
            let newNode = new Node();
            newNode.value = data;
            newNode.next = leader.next;
            leader.next = newNode;
            this.length++;
        }
    }
    insertbefore(index, data) {
        let leader = this.traverseToIndex(index - 2)
        let newNode = new Node();
        newNode.value = data;
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
    }
    reverse() {
        if (!this.head.next) return this.head;
        let currentNode = this.head;
        this.tail = this.head;
        let nextNode = currentNode.next;
        while (nextNode) {
            let temp = nextNode.next;
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = temp;
        }
        this.head.next = null;
        this.head = currentNode;
        return this;
    }
    removeDuplicates() {
        // let currentNode = this.head;
        // let nextNode = currentNode.next;
        // while (currentNode) {
        //   while (currentNode.value == nextNode.value && nextNode.next != null) {
        //     currentNode.next = nextNode.next;
        //     nextNode = nextNode.next;
        //     this.length--;
        //   }

        //   currentNode = currentNode.next;
        //   console.log("...........", currentNode);
        //   nextNode = currentNode.next;
        //   console.log("-------", nextNode);
        // }
        // return this;

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.next !== null && currentNode.value == currentNode.next.value) currentNode.next = currentNode.next.next;
            else currentNode = currentNode.next;
        }
    }
    
}

class Node{
    constructor() {
        this.value = 0,
        this.next = null
    }
}

let obj = new SingleLinkedList(10);
obj.append(10);
obj.append(20);
obj.prepend(10);
obj.append(30)
obj.append(30)
// obj.remove(2);
// obj.insertAfter(4, 30);
// obj.insertbefore(2, 45)
obj.removeDuplicates()
// obj.reverse()


obj.printList();

// function insert(list, arrayItem) {
//     const newNode = new Node();
//     newNode.value = arrayItem;
//     newNode.next = list;
//     list = newNode;
//     return list;
// }

// let input = [10, 20, 10, 12];
// let list = null;
// // let obj = new SingleLinkedList(input[0])
// for (let i = input.length - 1; i >= 0; i--){
//     // obj.append(input[i]);
//     list = insert(list, input[i])
// }

// console.log(list);
// while (list != null) {
//     console.log(list.value);
//     list = list.next;
// }

// console.log(list);
