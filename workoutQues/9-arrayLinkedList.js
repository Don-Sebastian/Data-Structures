// 10--> 15--> 12

class LinkedList {
  constructor() {
      this.value = 0;
      this.next = null;
  }
}

function insert(list, value) {
  const myLinkedList = new LinkedList();

  myLinkedList.value = value;
  myLinkedList.next = list;
  list = myLinkedList;
  return list;
}

let array = [1, 2, 3, 4, 5];
let n = array.length;
let list = null;
for (let i = n - 1; i >= 0; i--) {
    list = insert(list, array[i]);
}

while (list != null) {
    console.log(list.value + ' ');
    list= list.next;
}
