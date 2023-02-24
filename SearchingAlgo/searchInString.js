function searchString(str, target) {
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) == target) return i;
    }
    return -1;
}

let result = searchString('donseb', 's')
console.log(result);