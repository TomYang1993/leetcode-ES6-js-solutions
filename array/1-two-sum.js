/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
    let m = {};
    
    for(let i =0 ; i< nums.length; i++ ) {
        if( m[nums[i]] >= 0) {
            return [m[nums[i]], i]
        }else {
           m[target - nums[i]] = i; 
        }
    }
    return [];
};


var twoSum2 = function(nums, target) {
    if(nums.length < 2) {
        return [];
    }
    for(let i =0 ; i< nums.length; i++ ) {
        if(nums.indexOf(target - nums[i], i+1) > 0 && nums.indexOf(target - nums[i], i+1)!= i) {
            return [i, nums.indexOf(target - nums[i], i+1)]
        }
    }
    return [];
};

