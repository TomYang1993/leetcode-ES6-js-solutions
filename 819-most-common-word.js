/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

// pay attention to the requirements: paragraph only consists of letters, spaces, or the punctuation symbols !?',;.

var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.split(/[\s,.!?';]+/);
     words = words.map((word) => {
        return word.toLowerCase();
    })
    words = words.filter((word) => {
        return (banned.indexOf(word) < 0)
    })
    let wordMap = new Map();
    let maxTimes = 1;
    let maxWord = words[0];
    for(let i = 0;i<words.length; i++) {
        if(wordMap.get(words[i]) > 0) {
            wordMap.set(words[i], wordMap.get(words[i]) + 1)
            if(wordMap.get(words[i]) > maxTimes) {
                maxTimes = wordMap.get(words[i]);
                 maxWord = words[i];                      
            }
        }else {
            wordMap.set(words[i], 1) 
        } 
    }
    return maxWord
};