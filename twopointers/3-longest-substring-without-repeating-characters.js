var lengthOfLongestSubstring = function(s) {
    if( s.length === 0) return 0;
    // initialize a set for keeping the substring unique
    let charSet= new Set();
    let max = 0;
    let i = 0;
    let j = 0;
    const n = s.length;
    
    while(i < n && j < n){
        if(!charSet.has(s.charAt(j))){
            charSet.add(s.charAt(j))
            max = Math.max( j - i + 1, max);
            j++
        }else{
            // move the start pointer when repeated character found
            charSet.delete(s.charAt(i));
            i++
        }
    }
    return max;
};