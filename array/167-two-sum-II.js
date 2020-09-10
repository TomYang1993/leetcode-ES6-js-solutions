
// two pointer push towards the middle, because it is sorted
let twoSumFindMultiple = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let result = [];
    while(left < right) {
        if(numbers[left] + numbers[right] === target) {
            result.push([left + 1, right + 1]); 
            left++
        }else if(numbers[left] + numbers[right] < target) {
            left++
        }else{
            right--
        }
    }
    return result
};




// still brutal force, will break when j proceeds and go over the target limit
var twoSum = function(numbers, target) {
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] > target) {
                break;
            }
            if(numbers[i] + numbers[j] === target) {
               return [i + 1, j + 1]
            }
        }
    }
    return []
};

console.log(twoSumFindMultiple([0,1,1,2,4,5,6,7],7))