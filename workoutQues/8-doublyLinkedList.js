// 10--> 15--> 12

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      prev: null,
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      prev: null,
      value: value,
      next: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      prev: null,
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
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
      prev: null,
      value: value,
      next: null,
    };
    if (index >= this.length) {
      return this.append(value);
    }
    const leader = this.traversalToIndex(index - 1);
    const follower = leader.next;

    newNode.next = follower;
    newNode.prev = leader;
    follower.prev = newNode;
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
    const follower = unwantedNode.next;
    follower.prev = unwantedNode.prev;
    leader.next = unwantedNode.next;
    this.length--;
    return unwantedNode;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.append(25);

myLinkedList.prepend(1);

myLinkedList.insert(1, 13);
const deleted = myLinkedList.remove(1);
myLinkedList.printList();
console.log(myLinkedList);
