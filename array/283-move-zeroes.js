


var moveZeroes = function(nums) {
    if(!nums || !nums instanceof Array) return nums
    for(var i = nums.length-1;i>=0;i--){
        if(nums[i] == 0){
            nums.push(nums[i])
            nums.splice(i,1)
        }
    }
};

// two pointers 
var moveZeroes = function(nums) {
    for(let i = 0, j = 0; j < nums.length;) {
        if(nums[j] === 0) {
            j++
        }else{
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j++
        }
    }
};


var moveZeroes = function(nums) {
    if (nums.length == 0) return [];        

    let insertPos = 0;
    for (let num of nums) {
        if (num !== 0) nums[insertPos++] = num;
    }        

    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }
};