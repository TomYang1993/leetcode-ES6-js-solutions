

function removeDuplicatesBySet(arr) {

    return Array.from(new Set(arr));
}

function removeDuplicatesByIndexOf(arr) {

    return Array.from(new Set(arr));
}

function removeDuplicatesByMap(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = [],
        obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            res.push(arr[i])
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return res
}

let testArrayExtreme = [1,'',1,4,5,'6',6, true, null, 78, undefined, {}, [], 0];
let testArrayNormal = [1,'',1,4,5,'6',6,'a', 78, undefined, 'a', 'fast'];

console.log(removeDuplicates(testArrayNormal))