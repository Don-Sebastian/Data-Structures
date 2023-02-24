function recurringNo(array) {
    let hash = {};
    for (let i = 0; i < array.length; i++) {
        if (!hash[array[i]]) hash[array[i]] = 1;
        else return array[i];
    }
}
const arrayVal = [1, 2, 3, 8, 4, 5, 9, 6];
let result = recurringNo(arrayVal);
console.log(result);