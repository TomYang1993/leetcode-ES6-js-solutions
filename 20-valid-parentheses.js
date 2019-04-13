/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0) return true;
    if(s.length % 2 !== 0) return false;
    let chars = s.split("");
    let checkArray = [];
    let checkMap = new Map();
    checkMap.set('(', ')');
    checkMap.set('[', ']');
    checkMap.set('{', '}');

    checkArray.push(chars[0]);
    for(let i = 1; i < chars.length; i++) {
        if(checkMap.get(checkArray[checkArray.length - 1]) === chars[i]) {
            checkArray.pop()
            continue;
        }
        checkArray.push(chars[i]);
    }
    return checkArray.length === 0
    
 };