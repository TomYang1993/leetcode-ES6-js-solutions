


var isPalindrome = function(s) {
    if(s.length <= 1) {
        return true;
    }
    let tmp = s.replace(/[^0-9a-zA-Z]+/g, "");
    tmp = tmp.toLowerCase();
    return isPalinRecursive(tmp, 0, tmp.length -1)
};

function isPalinRecursive(string, start, end) {
    if(string.length <= 1) {
        return true;
    }
    if(string.charAt(start) === string.charAt(end)) {
        return isPalinRecursive(string.slice(1, end), 0, end - 2) 
    } else {
        return false;
    }
}