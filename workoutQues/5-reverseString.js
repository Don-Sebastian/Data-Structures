function reverseString(string) {
    if (!string || string.length < 2 || typeof string != 'string') {
        return 'Check the input!!'
    }
    let reversedArray = [];
    let strArray = string.split('')
    for (i = strArray.length - 1; i >= 0; i--){
        reversedArray.push(strArray[i]);
    }
    console.log(reversedArray.join(''));
}

function reverseString2(str) {
    return str.split('').reverse().join('');
}

const reverseString3 = (string) => [...string].reverse().join("");

console.log(reverseString3("don here I am"));