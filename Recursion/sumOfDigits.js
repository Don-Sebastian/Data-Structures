function sumOfDigits(num) {
    if (num == 0) return 0;
    return Math.floor((num % 10) + sumOfDigits(num / 10));
}

let result = sumOfDigits(1324);
console.log(result);