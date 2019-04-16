var rotate = function(nums, k) {
    let result = []
    let j;
    for(let i = 0; i < nums.length; i++) {
        result[(i+k) %  nums.length] = nums[i] 
    }
    for(let i = 0; i < nums.length; i++) {  
        nums[i] = result[i] 
    }
};


var rotate = function(nums, k) {
    while(k > 0) {
        nums.unshift(nums.pop())
        k--
    }
    console.log(nums)
    return nums
};

var rotate = function(nums, k) {
    let result = []
    let j;
    for(let i = 0; i < nums.length; i++) {
        j = calcIndex(k, i, nums.length)
        result[j] = nums[i] 
    }
    for(let i = 0; i < nums.length; i++) {  
        nums[i] = result[i] 
    }
};

function calcIndex(steps, index, length) {
    let finalIndex = index + steps
    while(finalIndex >= length) {
        finalIndex = finalIndex - length
    }
    
    return finalIndex
}