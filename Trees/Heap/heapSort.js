function heapSort(array) {
    let length = array.length;

    // Build heap(rearrange array)
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--)
        heapify(array, length, i);
    
    // one by one extracting element from heap
    for (let i = length - 1; i > 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];

        heapify(array, i, 0);
    }
    return array;
}

function heapify(arr, length, index) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < length && arr[left] > arr[largest]) largest = left;

    if (right < length && arr[right] > arr[largest]) largest = right;

    if (largest != index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        

        heapify(arr, length, largest);
    }
}

let arr = [12, 11, 13, 5, 6, 7];

console.log(heapSort(arr));