var reverse = function(x) {
    let neg = false
    if(x < 0){
        x = -x;
        neg = true
    }
    let result = 0;
    let digit;
    
    while(x > 0){
        digit = x % 10;
        result = result * 10 + digit;
        x = Math.floor(x/10)
    }
    if (result > 0x7fffffff) return 0;
    return neg ? -result : result;
};