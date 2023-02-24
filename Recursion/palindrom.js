function palindrom(num, start, end) {
    let input = [...num];
    if (input.length == 0) return false;
    if (start == end) return true;
    if (input[start] != input[end]) return false;
    if(start < end + 1) return palindrom(num, start + 1, end - 1)
    return true;

}
let string = '1';
let result = palindrom(string, 0, string.length - 1)
console.log(result);