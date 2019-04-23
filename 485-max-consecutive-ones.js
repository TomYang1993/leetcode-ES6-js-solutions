var findMaxConsecutiveOnes = function(nums) {
    if(nums.length === 0) return 0
    let max = 0;
    for(let i = 0, j = -1; i <= nums.length;i++) {
        if(nums[i] !== 1) {
            j = i
        }else{
            if(i - j > max) {
                max = i - j;
            }
        }     
    }
    return max
};

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0;
    for(let i = 0; i <= nums.length;i++) {
        if(nums[i] == 1) {
            count++
            max = Math.max(count, max)
        }else{
            count = 0
        }
    }
    return max
};