var isPalindrome = function(x) {
    if(x < 0 ) return false
    let arr = [];
    while( x > 0) {
        arr.push(x % 10)
        x = Math.floor(x/10)
    }
    for(let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if(arr[i]!=arr[j]){
            return false
        }
    }
    return true
};