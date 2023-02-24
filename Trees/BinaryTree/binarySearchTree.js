class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                        }
                    currentNode = currentNode.right;
                }
            } 
        }
        return this;
    }
    lookup(value) {
        if (!this.root) return false;
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) currentNode = currentNode.left;
            else if (value > currentNode.value) currentNode = currentNode.right;
            else if (value === currentNode.value) return currentNode;
        }
        return "Item not found";
    }
    remove(value) {
        if (!this.root) return false;
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                // Match found, get to work

                // Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) this.root = currentNode.left;
                    else {
                        
                        // if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) parentNode.left = currentNode.left;

                        // if parent < current value, make left child a right child of parent
                        else if (currentNode.value > parentNode.value) parentNode.right = currentNode.left;
                    }
                }

                // Option 2: Right child which doesnt have a left child
                else if (currentNode.right.left === null) {
                    if (parentNode === null) this.root = currentNode.left;
                    else {
                        currentNode.right.left = currentNode.left;

                        // if parent > current, make right child of left the parent 
                        if (currentNode.value < parentNode.value) parentNode.left = currentNode.right;

                        // if parent < current, make right child a right child of the parent
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                }

                // Option 3: Right child that has a left child
                else {
                    
                    // find the right child's left most child
                    let leftMost = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while (leftMost.left !== null) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftMostParent.left = leftMost.right;
                    leftMost.left = currentNode.left;
                    leftMost.right = currentNode.right;

                    if (parentNode === null) this.root = leftMost;
                    else {
                        if (currentNode.value < parent.value) parentNode.left = leftMost;
                        else if (currentNode.value > parentNode.value) parentNode.right = leftMost;
                    }
                }
                return this;
            }
        }
    }
    traverse() {
        return this.root;
    }
    BFSbinarySearchTree() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            // console.log(currentNode.value);
            list.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return list;
    }
    BFSbinarySearchTreeRecursive(queue, list) {
        if (!queue.length) return list;
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        return this.binarySearchTreeRecursive(queue, list);
    }
    DepthFirstSearchBST() {
        console.log('Inorder BST traversal', traverseInorderBST(this.root, []));
        console.log("Preorder BST traversal", traversePreorderBST(this.root, []));
        console.log("Postorder BST traversal", traversePostorderBST(this.root, []));
    }
}

function traverseInorderBST(node, list) {
    if (node.left) traverseInorderBST(node.left, list);
    list.push(node.value);
    if (node.right) traverseInorderBST(node.right, list);
    return list;
}

function traversePreorderBST(node, list) {
  list.push(node.value);
  if (node.left) traversePreorderBST(node.left, list);
  if (node.right) traversePreorderBST(node.right, list);
  return list;
}

function traversePostorderBST(node, list) {
  if (node.left) traversePostorderBST(node.left, list);
  if (node.right) traversePostorderBST(node.right, list);
  list.push(node.value);
  return list;
}

//         9
//    4         20
// 1    6    15    120  

const obj = new BinarySearchTree();
obj.insert(9)
obj.insert(4)
obj.insert(6)
obj.insert(20)
obj.insert(15);
obj.insert(120);
console.log(obj.insert(1));
console.log(obj.lookup(23));
// obj.remove(20)
console.log(obj.traverse());
console.log(obj.BFSbinarySearchTree());
// console.log(obj.BFSbinarySearchTreeRecursive([obj.root], []));

obj.DepthFirstSearchBST();


