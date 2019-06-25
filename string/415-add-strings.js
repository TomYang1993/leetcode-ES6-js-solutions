var addStrings = function(num1, num2) {
    let carry = 0;
     let result = [];
     for(let i = num1.length - 1, j = num2.length - 1 ; i>=0 || j>=0 || carry === 1 ; i--, j--) {
         let upNum = num1.charCodeAt(i) - 48 || 0;
         let downNum = num2.charCodeAt(j) - 48 || 0;
         result.push((upNum + downNum + carry) % 10);
         carry = Math.floor((upNum + downNum + carry) / 10);
     }
     return result.reverse().join('')
 };