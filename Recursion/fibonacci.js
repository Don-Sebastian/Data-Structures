function fibo(n) {
    if (n < 2) {
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

const result = fibo(5);
console.log(result)