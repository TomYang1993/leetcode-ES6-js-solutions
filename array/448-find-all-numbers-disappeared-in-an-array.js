var findDisappearedNumbers = function(nums) {
    if(nums.length === 0) return []
    let len = nums.length;
    for(let i = 0; i < len ; i++) {
       calcIndex = Math.abs(nums[i]) - 1 
        if(nums[calcIndex] > 0) {
            nums[calcIndex] = -nums[calcIndex]
        }
    }
    let result = []
    for(let i = 0; i < len ; i++) {
        if(nums[i] > 0) {
            result.push(i+1)
        }
    }
    return result
};


var findDisappearedNumbers = function(nums) {
    let len = nums.length;
    let indexArray = Array(len).fill(0);
    for(let i = 0; i < len ; i++) {
       indexArray[nums[i] - 1] = 1
    }
    let result = []
    for(let i = 0; i < len ; i++) {
        if(indexArray[i] === 0) {
            result.push(i+1)
        }
    }
    return result
};
