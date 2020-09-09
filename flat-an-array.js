//[1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]

let arr = [1, [2,3,[4,5]]];

let testArr = [...arr[1]]

console.log(testArr)

function flattenTheArrayByToString(targetArray) {
    let resultArray = targetArray.toString()
    resultArray = resultArray.split(',').map((item) => {
        return Number(item)
    })
    return resultArray
}

function flattenTheArrayRecursive(targetArray) {
    let resultArray = [];
    for(let i = 0; i <targetArray.length; i++ ){
        if(Array.isArray(targetArray[i])){
            resultArray = resultArray.concat(flattenTheArray(targetArray[i]));
        }else{
            resultArray.push(targetArray[i])
        }
    }

    return resultArray
}

function flattenTheArrayByStack(input) {
    const stack = [...input]; //保证不会破坏原数组
    const result = [];
    while (stack.length) {
      const first = stack.shift();
      if (Array.isArray(first)) {
        stack.unshift(...first);
      } else {
        result.push(first);
      }
    }
    return result;
  }


//test

let result = flattenTheArrayByStack(arr);

console.log(result)
console.log(Array.isArray(result))
console.log(Object.prototype.toString.call(result))


