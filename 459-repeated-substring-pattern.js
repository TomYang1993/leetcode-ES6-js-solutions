// get all common divisor, and divide array accordingly, compare all elements inside
var repeatedSubstringPattern = function(s) {
    let chars = s.split('');
    for(let i = 1; i < chars.length; i++) {
        if(chars.length % i === 0) {
            let j
            for(j = 0; j + i < chars.length; j = j + i) {
                if(!(chars.slice(j, j + i).join('') === chars.slice(j + i ,j + i * 2).join(''))) {
                    break;
                }
            }
            if(j === chars.length - i ) {
                return true
            }
        }
    }
    return false;
};



// best algorithm, but maybe suitable for this problem only
var repeatedSubstringPattern = function(s) {
    let str = s + s;
    str = str.slice(1, str.length - 1)
    return str.indexOf(s) >= 0
};



// kmp substring pattern
var repeatedSubstringPattern = function(s) {
    let kmpTable = getKMPPattern(s)
    let n = s.length
    let patternLen = kmpTable[n - 1];
    
    return n % (n - patternLen) === 0 && patternLen > 0
};

function getKMPPattern(needle) {
  let result = [0];
  for (let i = 0, j = 1; j < needle.length;) {
    if (needle[i] === needle[j]) {
      result[j] = ++i
      j++
    } else {
        if(i === 0) {
            result[j] = 0
            j++
        }else{
             i = result[i - 1]
        }
    }
  }
  return result;
}
