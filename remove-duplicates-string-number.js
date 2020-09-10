

function removeDuplicatesBySet(arr) {

    return Array.from(new Set(arr));
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

let testArrayExtreme = [1,'',1,4,5,'6',6, true, null, 78, undefined, {}, [], 0];
let testArrayNormal = [1,'',1,4,5,'6',6,'a', 78, undefined, 'a', 'fast'];

console.log(removeDuplicatesByMap(testArrayNormal))