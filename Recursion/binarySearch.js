function search(array, target, start, end) {
    if (start > end) return -1;
    let middle = Math.floor((start + end) / 2);
    if (target == array[middle]) return middle;
    else if (target < array[middle]) return search(array, target, start, middle - 1);
    else return search(array, target, middle + 1, end);
}

let array = [1, 2, 3, 23, 32, 33, 45, 54, 56];
let target = 1;
let result = search(array, target, 0, array.length - 1);
console.log(result)