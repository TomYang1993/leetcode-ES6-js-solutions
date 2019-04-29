var detectCapitalUse = function(word) {
    let j = 0
    for(let i = 0; i < word.length; i++) {
        if(word.charCodeAt(i) <= 90){
            j++}
  
    }
    if(j === word.length || j === 0) {
        return true
    }
    if(word.charCodeAt(0) <= 90 && j === 1) {
        return true
    }
    return false
};


var detectCapitalUse = function(word) {
    let j = 0
    let k = 0
    for(let i = 0; i < word.length; i++) {
        if(word.charCodeAt(i) <= 90){
            j++
        }else{
            k++
        }
    }
    if(j === word.length || k === word.length || (word.charCodeAt(0) <= 90 && j === 1 && k > 0 )) {
        return true
    }
    return false
};