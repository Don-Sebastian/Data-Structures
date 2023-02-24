let counter = 0;
function fibonacci() {
    let cache = {};
    return function fib(n) {
        counter++
        if (n in cache) return cache[n];
        else {
            if (n < 2) return n;
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n];
        }
    }
}

// const fastFibonacci = fibonacci();
// console.log(fastFibonacci(1476));
// console.log(counter);


function simpleFib(n) {
    let ans = [0, 1];
    for (let i = 2; i <= n; i++) ans.push(ans[i - 1] + ans[i - 2]);
    return ans.pop();
}

console.log(simpleFib(1476));