
// somehow worst, related to javascript characteristics
var majorityElement = function(nums) {
    nums.sort((a,b) => {return a-b});
    return nums[Math.floor(nums.length / 2)]
}

// map brutal force
var majorityElement = function(nums) {
    let map = {};
    for(let i=0; i < nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]] ++
        }else {
            map[nums[i]] = 1;
        }
    }
    for (let key in map) {
        if(map[key] >= nums.length / 2) {
            return Number(key)
        }
    }
}

// moore algorithm
// cancel each other out, find the element with the highest frequency, a general way, o(n) time, o(1) space

var majorityElement = function(nums) {
    
    let count = 0
    let majorEle = nums[0]
    
    for(let i = 0; i < nums.length; i++) {
        if(count === 0) {
            majorEle = nums[i]
        }
        if(nums[i] === majorEle) {
            count++
        }else {
            count--
        }
    }
    return majorEle
}




