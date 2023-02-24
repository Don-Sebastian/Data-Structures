let sum = 0;
function reverse(num) {
    if (num == 0) return;
    let rem = num % 10;
    sum = sum * 10 + rem;
    reverse(Math.floor(num / 10));
}

reverse(32498);
console.log(sum);