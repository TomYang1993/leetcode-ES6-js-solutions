


var containsNearbyDuplicate = function(nums, k) {
    if(nums.length <= 1) return false
    let minLen = Infinity;
    let m = new Map();
    
    for(let i = 0; i < nums.length; i++) {
       if(m.get(nums[i]) >= 0) {
          if(i - m.get(nums[i]) < minLen) {
              minLen = i - m.get(nums[i])
          }  
          m.set(nums[i], i); 
       }else{
          m.set(nums[i], i);
       }
    }
    return minLen <= k
};


var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]){
                if( j - i <= k) {
                    return true
                }
            }
        }
    }
    return false
};