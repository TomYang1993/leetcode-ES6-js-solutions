var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }
  let chars = s.split('');
  let maxLength = 0;
  let maxChars = [];
  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j <= chars.length; j++) {
      if (checkPalindrome(0, chars.slice(i, j), chars.slice(i, j).length - 1) && chars.slice(i, j).length > maxLength) {
        maxChars = chars.slice(i, j)
        maxLength = chars.slice(i, j).length
        if (maxLength === chars.length) {
          return maxChars.join('')
        }
      }
    }
  }
  return maxChars.join('')
};

function checkPalindrome(start, chars, end) {
  if (chars.length <= 1) {
    return true;
  }
  if (chars[start] === chars[end]) {
    return checkPalindrome(0, chars.slice(1, end), end - 2);
  } else {

    return false;
  }

}



/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//         if(s.length==0) return "";
//         // int i = 0, j = 0;
//         s = s.split('');
//         let n = s.length;
//         let P = [];
//         for(let i=0; i<n; i++) {
//             P[i] = [];
//             for(let j=0; j<n; j++) {
//                 P[i][j] = false;
//             }
//         }

//         for(let x = 0; x < n; x++){
//             P[x][x]=true;
//             if(x===n-1) break;
//             P[x][x+1] = (s[x]===s[x+1]);
//         }

//         //dp 
//         for(let i = n-3; i>=0; --i){
//             for(let j = i+2;j<n; ++j){
//                 P[i][j] = (P[i+1][j-1] && s[i]==s[j]);     
//             }
//         }
//     console.log(P)

//         //get maxstr result
//         let max = 0;
//         let maxstr = "";
//         for(let i=0;i<n;i++){
//             for(let j=i;j<n;j++){
//                 if(P[i][j]==true && j-i+1>max){

//                     max = j-i+1;
//                     maxstr = s.slice(i,j-i+2).join('');
//                 }
//             }
//         }
//         return maxstr;



function getPattern(pattern) {

  let i = 1, j = 0;
  let prefixArray = [0];
  while (i < pattern.length) {

    while (pattern.charAt(i) != pattern.charAt(j) && j > 0) {
      j = prefixArray[j - 1];

    }
    if (pattern.charAt(i) == pattern.charAt(j)) {
      prefixArray[i] = j + 1;
      i++;
      j++;

    } else {
      prefixArray[i] = j;
      i++;
    }
  }
  return prefixArray
}

console.log(getPattern('abaaaab'))

var strStr = function (haystack, needle) {
  if (haystack === null) return -1
  if (needle === "") return 0
  let patternArray = getKMPPattern(needle)

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

// KMP match table

function getKMPPattern(needle) {
  let result = [0];
  for (let i = 0, j = 1; j < needle.length;) {
    if (needle[i] === needle[j]) {
      result[j] = ++i
      j++
    } else {
      if (i === 0) {
        result[j] = 0
        j++
      } else {
        i = result[i - 1]
      }
    }
  }
  return result;
}



/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {


};

class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// PriorityQueue class 
class PriorityQueue {

  // An array is used to implement priority 
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    // creating object from queue element 
    var qElement = new QElement(element, priority);
    var contain = false;

    // iterating through the entire 
    // item array to add element at the 
    // correct location of the Queue 
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        // Once the correct location is found it is 
        // enqueued 
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    // if the element have the highest priority 
    // it is added at the end of the queue 
    if (!contain) {
      this.items.push(qElement);
    }
  }

  // dequeue() 
  // front() 
  // isEmpty() 
  // printPQueue() 
}