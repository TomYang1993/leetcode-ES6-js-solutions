
//tranverse one time, destructive way

var removeElement = function(nums, val) {
    let length = 0
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== val) {
          nums[length++] = nums[i]
      }
    }
      return length;
  };


// more intuitive way
  var removeElement = function(nums, val) {
    while(nums.indexOf(val) >= 0) {
        nums.splice(nums.indexOf(val), 1);
    }
    return nums.length;
};