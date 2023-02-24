function selectionSort(array) {
    length = array.length;
    for (let i = 0; i < length; i++){
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) min = j;
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

const result = selectionSort([9, 10, 3, 6, 8, 1, 0, 4])
console.log(result);