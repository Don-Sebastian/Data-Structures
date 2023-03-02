class TrieNode{
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let currentNode = this.root
        for (let letter of word) {
            if (!currentNode.children.has(letter)) {
                currentNode.children.set(letter, new TrieNode())
            }
            currentNode = currentNode.children.get(letter)
        }
        currentNode.endOfWord = true;
        return this.root;
    }
    search(word) {
        let currentNode = this.root;
        for (let letter of word) {
            if (!currentNode.children.has(letter)) return false;
            currentNode = currentNode.children.get(letter);
        }
        return currentNode.endOfWord;
    }
    autoSuggest(prefix) {
        let currentNode = this.root;
        if ((prefix.length - 1) % 2 != 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            for (let letter of prefix) {
              if (currentNode.children.has(letter))
                currentNode = currentNode.children.get(letter);
              else return [];
            }
            return this.traverse(currentNode, prefix);
        } else {
            for (let letter of prefix) {
              if (currentNode.children.has(letter))
                currentNode = currentNode.children.get(letter);
              else return [];
            }
            return this.traverse(currentNode, prefix);
        }
        
    }
    traverse(node, prefix) {
        let result = [];
        if (node.endOfWord) result.push(prefix);
        
        for (let [letter, child] of node.children) {
            let word = prefix + letter;
            result.push(...this.traverse(child, word))
        }
        
        return result;
    }
}

const obj = new Trie();
obj.insert('anbin');
obj.insert('albin');
console.log(JSON.stringify(obj.insert('don')));


console.log(obj.search("anbinsd"));

console.log(obj.autoSuggest('an'));