/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
      if(++digits[i] > 9) digits[i] = 0;
      else return digits;
    }
    digits.unshift(1);
    return digits;
  };


  var plusOne = function(digits) {
    let len = digits.length;    
    let i  = 0;
    while(digits[len - 1 - i] + 1 === 10) {
        digits[len - 1 - i] = 0
        i++
    }
    if(i === len) {
        digits.unshift(1)
    }else{
      digits[len - 1 - i] = digits[len - 1 - i] + 1;  
    }
    
    return digits;
};
