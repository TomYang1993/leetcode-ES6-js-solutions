
// implement indexOf() function
// KMP algorithm
var strStr = function (haystack, needle) {
    if (haystack === null) return -1
    if (needle === "") return 0
    let patternArray = getPattern(needle)
  
    for (let i = 0, j = 0; i < haystack.length;) {
      if (haystack.charAt(i) === needle.charAt(j)) {
        i++;
        j++;
        if (j === needle.length) return i - needle.length
      }
      if (haystack.charAt(i) !== needle.charAt(j)) {
        if (j > 0) {
          j = patternArray[j - 1]
        } else {
          i++
        }
      }
    }
    return -1
  };
  
  function getPattern(needle) {
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


// naive way, start matching when the first character matches

var strStr = function (haystack, needle) {
    if (haystack === null) return -1
    if (needle === "") return 0
  
      for(let i = 0; i < haystack.length;) {
          if(haystack.charAt(i) === needle.charAt(0)) {
              if(haystack.slice(i, needle.length + i) === needle) {
                  return i
              }
              i++
          }else{
              i++
          }
      }
      return -1;
  
  };