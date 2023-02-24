// function change(myString) {
//   const stringArray = myString.split('');
//   for (let i = 0; i < stringArray.length; i++){
//       if (i % 2 != 0) {
//           stringArray[i] = "*";
//       }
//   }
//   return myString = stringArray.join('');
// }

// const result = change('ALICE');
// console.log(result);

class HashTable{
    constructor(size) {
        this.data = new Array(size);
    }
    _hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue = (hashValue + key.charCodeAt(i) * i) % this.data.length;
        }
        return hashValue;
    }
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) this.data[address] = [];
        this.data[address].push([key, value]);
        return this;
    }
    get(key) {
        let address = this._hash(key);
        let currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (this.data[address][i][0] === key) return this.data[address][i][1];
            }
        }
        return "key not found";
    }
}

const obj = new HashTable(50);
obj.set('grap', 300)
console.log(obj.set("app", 200)); 
console.log(obj.get('app'));
