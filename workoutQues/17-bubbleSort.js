const arr = [2,3,9,7,4,1,0,8,6]

function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++){
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

const result = bubbleSort(arr);
console.log(result);