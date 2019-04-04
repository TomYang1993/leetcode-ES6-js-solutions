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