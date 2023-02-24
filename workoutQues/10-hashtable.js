class Hashtable{
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) { 
        let i, hash = 0;
        for (i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);    
        return this.data;
    }
    get(key) {
        let address = this._hash(key);
        let currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key) return currentBucket[i][1]
            }
        }
        return undefined;
    }
    keys() {
        let keyArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keyArray.push(this.data[i][0][0])
            }
        }
        console.log(keyArray);
    }
}

// const myHashTable = new Hashtable(50);
// myHashTable.set('grapes', 10000)
// myHashTable.set('mango', 20000);
// const value = myHashTable.get('grapes')
// myHashTable.keys()
// console.log(value);

function firstRecurringCharacter(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) return input[i];
        else map[input[i]] = i;
    }
    return undefined;
}

const result = firstRecurringCharacter([2, 3, 1, 5, 2, 8, 6, 4, 7, 9, 3])
console.log(result);