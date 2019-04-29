var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i = 0;i < nums.length; i++) {
        if(set.has(nums[i])) return true
        set.add(nums[i])
    }
    return false
};

var containsDuplicate = function(nums) {
    nums.sort(function(a,b){
        return a - b
    });
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) return true;
    }
    return false;
};