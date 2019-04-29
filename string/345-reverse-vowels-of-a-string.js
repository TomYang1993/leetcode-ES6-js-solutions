var reverseVowels = function(s) {
    let chars = s.split("");
    let set = 'aeiouAEIOU'
    for(let i = 0, j = s.length -1; i < j;) {
        if(set.includes(chars[i]) && set.includes(chars[j])) {
            let temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
            i++;
            j--;
        }
        if(!set.includes(chars[i])){
             i++
        }
        if(!set.includes(chars[j])){
            j--
        }
    }
    return chars.join('')
};




var reverseVowels = function(s) {
    let chars = s.split("");
    let set = 'aeiouAEIOU'
    for(let i = 0, j = s.length -1; i < j;) {
        if(isVowel(chars[i]) && isVowel(chars[j])) {
            let temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
            i++;
            j--;
        }
        if(!set.includes(chars[i])){
             i++
        }
        if(!set.includes(chars[j])){
            j--
        }
    }
    return chars.join('')
};

function isVowel(char) {
    return 'aeiouAEIOU'.includes(char)
}