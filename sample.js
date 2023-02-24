// class HashTable{
//     constructor(size) {
//         this.data = new Array(size);
//     }
//     _hash(key) {
//         let hashValue = 0;
//         for (let i = 0; i < key.length; i++){
//             hashValue = (hashValue + key.charCodeAt(i) * i) % this.data.length;
//         }
//         return hashValue;
//     }
//     set(key, value) {
//         let address = this._hash(key);
//         if (!this.data[address]) this.data[address] = [];
//         this.data[address].push([key, value]);
//         return this;
//     }
//     get(key) {
//         let address = this._hash(key);
//         let currentData = this.data[address];
//         if (currentData) {
//             for (let i = 0; i < currentData.length; i++){
//                 if (currentData[i][0] === key) return currentData[i][1];
//             }
//         }
//         return 'Key not found';
//     }
// }

// const obj = new HashTable(50);
// obj.set('apple', 200);
// console.log(obj.set('grapes', 1000));
// console.log(obj.get("grapes"));


// class Queue{
//     constructor() {
//         this.pushStack = [];
//         this.popStack = [];
//         this.length = 0;
//     }
//     enqueue(value) {
//         this.pushStack.push(value);
//         this.length++;
//     }
//     dequeue() {
//         while (this.pushStack.length) {
//             this.popStack.push(this.pushStack.pop());
//         }
//         this.length--;
//         return this.popStack.pop();
//     }
//     display() {
//         while (this.popStack.length) {
//             this.pushStack.push(this.popStack.pop())
//         }
//         console.log(this.pushStack);
//     }
// }

// const obj = new Queue();
// obj.enqueue(1);
// obj.enqueue(3);
// obj.enqueue(9);
// console.log("Queue before dequeue");
// obj.display();
// console.log(obj.dequeue());
// console.log("Queue after dequeue");
// obj.display();


class TrieNode{
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let currentValue = this.root;
        for (let i = 0; i <= word.length; i++){
            let char = word[i];
            if (!currentValue.children[char]) currentValue.children[char] = new TrieNode();
            currentValue = currentValue.children[char];
        }
        currentValue.endOfWord = true;
    }
    getWord(word) {
        let currentValue = this.root;
        let prefix = '';
        for (let i = 0; i < word.length; i++) {
            let char = word[i]
            if (i % 2 != 0) {
                prefix += char;
                this.autoFillWord(currentValue, prefix)
            }
        }
    }
    autoFillWord(node, prefix) {
        let 
    }
}