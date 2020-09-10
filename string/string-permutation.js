
 // remove duplicates
 function unique(arr) {
   var ret = []
 
   for (var i = 0; i < arr.length; i++) {
     var item = arr[i]
     if (ret.indexOf(item) === -1) {
       ret.push(item)
     }
   }
 
   return ret
 }

function stringPermutation(str) {
    if(!str) throw new Error("invalid string") 
    if(str.length <= 1){
        return [str]
    }
    let subPermutations = stringPermutation(str.slice(1));
    let insertedChar = str[0]
    let result = []
    for(let i = 0; i < subPermutations.length; i++){
        let sub = subPermutations[i]
        for(let j = 0; j < sub.length + 1; j++){
            let temp = sub.slice(0,j) + insertedChar + sub.slice(j)
            result.push(temp)
        }
    }
    return result
}

try{
    let result = unique(stringPermutation('aab'))
    console.log(result)
}catch(e){
    console.log(e)
}
