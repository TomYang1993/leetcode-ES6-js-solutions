
// two pointer push towards the middle, because it is sorted
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while(left < right) {
        if(numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1]
        }else if(numbers[left] + numbers[right] < target) {
            left++
        }else{
            right--
        }
    }
    return []
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