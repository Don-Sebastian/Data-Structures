function selectionSort(array) {
    for (let i = 0; i < array.length; i++){
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < array.length; i++){
            if (array[j] < array[min]) min = j;
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}
const arr = [8, 20, -2, -6, 4];

console.log(selectionSort(arr));