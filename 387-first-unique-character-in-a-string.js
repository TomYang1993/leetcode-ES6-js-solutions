/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s.length === 0) return -1;
    if(s.length === 1) return 0;
    let charMapping= {};
    let chars = s.split('');
    for(let i = 0; i < chars.length; i++) {
        if(charMapping[chars[i]]) {
            charMapping[chars[i]]++
        }else{
           charMapping[chars[i]] = 1 
        }
    }
    
     for(let i = 0; i < chars.length; i++) {
        if(charMapping[chars[i]] === 1){
            return i;
        }
    }
    return -1;
};



var firstUniqChar = function(s) {
    if(s.length === 0) return -1;
    if(s.length === 1) return 0;
    let charArray = Array(26).fill(0);
    let chars = s.split('');
    for(let i = 0; i < chars.length; i++) {
        charArray[chars[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    
     for(let i = 0; i < chars.length; i++) {
        if(charArray[chars[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1){
            return i;
        }
    }
    return -1;
};