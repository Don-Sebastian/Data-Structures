function FactorialRecursion(value) {
    if (!value) return 0;
    if (value === 2) return 2;
    return value * FactorialRecursion(value - 1)
}

function FactorialIterative(value) {
    let fact = 1;
    if (!value) return 0;
    for (let i = value; i > 1; i--){
        fact = fact * i;
    }
    return fact;
}

// console.log(FactorialIterative(2));
console.log(FactorialRecursion(5));