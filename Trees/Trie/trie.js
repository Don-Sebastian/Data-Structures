class TrieNode{
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++){
            let char = word[i];
            if (!currentNode.children[char]) currentNode.children[char] = new TrieNode();
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }
    search(word) {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++){
            let char = word[i];
            if (!currentNode.children[char]) return false;
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }
}

const obj = new Trie();
obj.insert('apple');
obj.insert('orange');
obj.insert('app');
console.log(JSON.stringify(obj));

console.log(obj.search("ora"));
console.log(obj.search("app"));