class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;       
    }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) this.root = new Node(value);
    else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = new Node(value);
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = new Node(value);
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
      else if (value === currentNode.value) return true;
    }
    return false;
  }
  bredthFirstSearch() {
    if (this.root === null) return this;
    else {
      let currentNode = this.root;
      let list = [];
      let queue = [];
      queue.push(currentNode);
      while (queue.length) {
        console.log(queue);
        currentNode = queue.shift();

        list.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
      return list;
    }
  }
  depthFirstSearch() {
    if (this.root === null) return false;
    console.log("Preorder: ", preOrderDFS(this.root, []));
    console.log("Inorder: ", preOrderDFS(this.root, []));
    console.log("Postorder: ", preOrderDFS(this.root, []));
  }
  preOrderDFS(root, list) {
    if (root === null) return;
    list.push(root.value);
    if (root.left) this.preOrderDFS(root.left, list);
    if (root.right) this.preOrderDFS(root.right, list);
    return list;
  }

  // remove(value) {
  //   this.root = this._removeNode(this.root, value);
  // }

  // _removeNode(node, value) {
  //   if (!node) {
  //     return null;
  //   }

  //   if (value === node.value) {
  //     if (!node.left && !node.right) {
  //       return null;
  //     }

  //     if (!node.left) {
  //       return node.right;
  //     }

  //     if (!node.right) {
  //       return node.left;
  //     }

  //     const temp = this._findMinNode(node.right);
  //     node.value = temp.value;
  //     node.right = this._removeNode(node.right, temp.value);
  //     return node;
  //   } else if (value < node.value) {
  //     node.left = this._removeNode(node.left, value);
  //     return node;
  //   } else {
  //     node.right = this._removeNode(node.right, value);
  //     return node;
  //   }
  // }

  // _findMinNode(node) {
  //   while (node.left) {
  //     node = node.left;
  //   }

  //   return node;
  // }
  remove(value) {
    this.root = this._removeNode(this.root, value);
  }
  _removeNode(node, value) {
    if (node === null) return node;
    if (value === node.value) {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let temp = this.findMinNode(node.right);
      node.value = temp.value;
      node.right = this._removeNode(node.right, temp.value);
      return node;
    } else if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else {
      node.right = this._removeNode(node.right, value);
      return node;
    }
  }
  findMinNode(node) {
    while (node.left) node = node.left;
    return node;
  }
}

const obj = new BinarySearchTree();
obj.insert(2);
obj.insert(3);
console.log(JSON.stringify(obj.insert(1)));
console.log(obj.lookup(3));
console.log(obj.bredthFirstSearch());
obj.remove(2);
console.log(obj.root);