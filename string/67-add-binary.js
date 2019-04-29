var addBinary = function(a, b) {
    let carry = 0;
    let result = [];
    for(let i = a.length - 1,j = b.length - 1; i >= 0 || j >= 0 || carry === 1; i--, j--) {
        let aCode = a.charCodeAt(i) - 48 || 0;
        let bCode = b.charCodeAt(j) - 48 || 0;
        result.push((aCode + bCode + carry) % 2 )
        
        carry = Math.floor((aCode + bCode + carry) / 2)
        
    }
    return result.reverse().join('')
};