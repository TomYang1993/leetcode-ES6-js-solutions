/**
 * @param {string} s
 * @return {string}
 */


// old javascript way, define global variable not working for leetcode nodejs environment
var longestPalindrome = function (s) {
    let result = [0, 0];
    let len = s.length;
    if (len < 2) return s;
    for (let i = 0; i < len - 1; i++) {
        {
            result = extendPalindrome(s, i, i, result[0], result[1]);
            result = extendPalindrome(s, i, i + 1, result[0], result[1]);

        };
    }
    return s.slice(result[0], result[0] + result[1]);

};

function extendPalindrome(s, left, right, start, maxLen) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        {
            left--;
            right++;
        }
    };
    if (maxLen < right - left - 1) {
        start = left + 1;
        maxLen = right - left - 1;
    }
    //return changes of start and maxLen so that it can be updated
    return [start, maxLen]
}


// OOP javascript
var longestPalindrome = function (s) {
    let p = new Palindrome();
    let len = s.length;
    if (len < 2) return s;
    for (let i = 0; i < len - 1; i++) {
        {
            p.extendPalindrome(s, i, i);
            p.extendPalindrome(s, i, i + 1);

        };
    }
    return s.slice(p.start, p.start + p.maxLen);

};

class Palindrome {
    constructor() {
        this.start = 0
        this.maxLen = 0
    }

    extendPalindrome(s, left, right) {
        while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
            {
                left--;
                right++;
            }
        };
        if (this.maxLen < right - left - 1) {
            this.start = left + 1;
            this.maxLen = right - left - 1;
        }
    }
}


