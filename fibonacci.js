const fibonacciRecursive = (n) => {
    if(n <= 1) return 1;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
} 

// customization memory
function fibonacci(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

const fibonacciIterativePrintValue = (n) => {
    if(n <= 1){
        return 1;
    }
    let first = 0, second = 1, temp

    while(n > 0){
        temp = second;
        second = first + second;
        first = temp;
        n--
    }
    return second

}

const fibonacciIterativePrintArray = (n) => {
    if(n <= 1){
        return [1]
    }
    if(n == 2){
        return [1,1]
    }
    let result = [1,1]
    for(let i = 2; i < n; i++){
        result.push(result[i-1] + result[i-2])
    }
    return result;
}

console.log(fibonacciRecursive(4))