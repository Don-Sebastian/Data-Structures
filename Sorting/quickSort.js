function quickSort(array) {
    if (array.length < 2) return array;
    let length = array.length;
    let pivot = array[length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) left.push(array[i]);
        else right.push(array[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)] 
}

const input = [2, 6, 4, 7, 6, 9, 6, 4, 7, 5,7,0]
console.log(quickSort(input));