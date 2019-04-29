var lengthOfLastWord = function(s) {
    if(s.trim().length === 0) return 0
    if(s.length <= 1) return s.length
    let words = s.trim().split(" ");
    return  words[words.length -1].length
};
