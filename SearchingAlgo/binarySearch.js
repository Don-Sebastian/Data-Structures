function binarySearch(input, element) {
    let lower = 0;
    let upper = input.length - 1;
    while (lower <= upper) {
        const middle = Math.floor((upper + lower) / 2);
        if (element == input[middle]) return middle;
        else if (element < input[middle]) upper = middle - 1;
        else if (element > input[middle]) lower = middle + 1;
    }
    return 'Element Not found'
}

const result = binarySearch([1, 2, 3, 5, 9, 10], 2);
console.log(result);