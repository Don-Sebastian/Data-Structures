class MyArray{
    constructor(length, data) {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const deletedItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
    }
    delete(index) {
        const deletedItem = this.data[this.index - 1];
        this.shiftItems(index);
    }
    shiftItems(index) {
        for (let i = index; i < this.length; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("JS");
newArray.push("!");
newArray.delete(1)
const element = newArray.get(1)
console.log(newArray);
console.log(element);