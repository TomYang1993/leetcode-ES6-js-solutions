function removeDuplicatesByDoubleLoop(arr) {
    let resultArray = [];
    let isRepeat;
    for(let i = 0; i < arr.length; i++){
        isRepeat = false;
        // mimick a includes function
        for(let j = 0; j < resultArray.length; j++){
            if(arr[i] === resultArray[j]){
                isRepeat = true;
                break;
            }
        }
        if(!isRepeat){
            resultArray.push(arr[i]);
        }
    }
    return resultArray;
}

/* only use when there are only number/string elements */
function removeDuplicatesBySort(arr) {
    let tempArray = arr.sort();
    const resultArray = [];
    for(let i = 0; i < tempArray.length; i++){
        if(tempArray[i] !== resultArray[resultArray.length - 1]){
            resultArray.push(tempArray[i])
        }
    }
    return resultArray;
}

function removeDuplicatesByIndexOf(arr) {
    let resultArray = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
    return resultArray;
}

function removeDuplicatesByIndexOfOptimized(arr) {
    let resultArray = [];
    for(item of arr) {
        if(resultArray.indexOf(item) === -1){
            resultArray.push(item)
        }
    }
    return resultArray;
}

function removeDuplicatesByMap(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = [],
        map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.get(arr[i])) {
            res.push(arr[i])
            map.set(arr[i],1)
        } else {
            map.set(arr[i],map.get(arr[i]) + 1)  // no need if only want to get the result array
        }
    }
    return res
}

function removeDuplicatesBySet(arr) {
    return Array.from(new Set(arr));
}

let testArrayExtreme = [1,'',1,4,5,'6',6, true, null, 78, undefined, {}, [], 0];
let testArrayNormal = [1,'',1,4,4,4,4,5,'6',6,'a', 78, undefined, 'a', 'fast'];
let testArrayNumStr = [1,'',1,4,5,'6',6, 6,0];

console.log(removeDuplicatesByDoubleLoop(testArrayNumStr))