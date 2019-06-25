var missingNumber = function(nums) {
    let distinctSum = nums.length * (nums.length + 1) / 2;
    let actualSum = 0
    for(let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }
    return distinctSum - actualSum;
};