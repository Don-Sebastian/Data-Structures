class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTrecursion{
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.isEmpty) this.root = newNode;
        else {
            this.insertNode(this.root, newNode);
        }
        console.log(this);
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) root.left = newNode;
            else return this.insertNode(root.left, newNode);
        } else {
            if (root.right === null) root.right = newNode;
            else return this.insertNode(root.right, newNode);
        }
    }
}

const obj = new BSTrecursion();
obj.insert(5);
obj.insert(6);
console.log(obj.insert(4));