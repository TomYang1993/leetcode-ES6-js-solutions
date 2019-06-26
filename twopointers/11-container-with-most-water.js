
var maxArea = function(height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;
    while(start < end){
        if(Math.min(height[start], height[end]) * (end - start) > max){
            max = Math.min(height[start], height[end]) * (end - start)
        }
        if(height[start] < height[end]){
            start++;
        }else{
            end--;
        }
    }
    return max
};


//brutal force
var maxArea = function(height) {
    let max = 0;
    for(let i = 0; i < height.length; i++){
        for(let j = i + 1; j < height.length; j++){
            if(Math.min(height[i], height[j])*(j - i) > max){
                max = Math.min(height[i], height[j])*(j - i)
            }
        }
    }
    return max;
};