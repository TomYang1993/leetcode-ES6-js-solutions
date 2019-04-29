var thirdMax = function(nums) {
    nums.sort(function(a,b){
              return b - a 
              })
    let set = new Set();
    for(let i = 0; i < nums.length; i++){
        set.add(nums[i])
    }
    if(set.size < 3){
        return Array.from(set)[0]
    }else{
        return Array.from(set)[2] 
    }

};