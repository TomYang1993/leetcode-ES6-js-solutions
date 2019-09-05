/**
 * method 1, only scan half of both array, but compare element by element
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const len = Math.floor((m + n) / 2) + 1;
    let aStart = 0;
    let bStart = 0;
    let left;
    let right;
    for(let i = 0; i < len; i++){
        left = right
        if(aStart < m && (bStart >= n || nums1[aStart] < nums2[bStart])){
            right = nums1[aStart++]
        }else{
            right = nums2[bStart++]
        }   
    }
    if((m + n) % 2 == 0){
        return (left + right) / 2
    }else{
        return right
    }
};

/*
method 2 log(m + n), compare once, get rid off half every time
*/


var findMedianSortedArrays = function(nums1, nums2) {
    let al = nums1.length;
    let bl = nums2.length;
    // find possible medians, if even find left and right, if odds find the middle one
    // after calculation and characteristics of odd and even numbers, left and right is the same for odds
    // so no concerns for odd and even numbers
    let left = Math.floor((al + bl + 1) / 2);
    let right = Math.floor((al + bl + 2) / 2);
    return (findKthSmallest(nums1, 0,al, nums2, 0, bl, left) + findKthSmallest(nums1, 0,al, nums2, 0, bl,right)) / 2;
};

// find median is to find the left and right. for example there are two arrays, a sum of the two arrays
// are nine elements in total, we need to find the fifth one, which is the fifth smallest element
// because every array is in order
function findKthSmallest(A, aStart,ALength, B, bStart,BLength, k){
    let halfK = Math.floor(k/2);
    // in case one of the array runs out of index, so continue on another array with proper index and no need for comparison any more
    if(aStart > ALength - 1) return B[bStart + k - 1];
    if(bStart > BLength - 1) return A[aStart + k - 1];
    if(k == 1){
        //base case, one step away from the kth smallest
        return Math.min(A[aStart], B[bStart]);
    }
    
    let Amid = +Infinity
    let Bmid = +Infinity
    
    // in case the k exceeding one of the array's limit at first place
    // set both to infinity so if exceeding A, the index only increases on B array
    // if exceeding B's index, the index only increases on A's index
    // no worry if A will increase index to the final element and leave all the elements in B out of page
    // Assume it will happen, it only happens when the elements in B are all smaller and A increases to 
    // kth element and missing the small ones in B, which missing the real median
    // again say A has 8 elements , B has one, k = 5. k/2 = 2
    // in second recursive call k = 3, k/2 = 1
    // the element in B is taken into consideration
    // every time k/2 elements got rid off, k - k/2 will remain, and k - k/2 is bigger than the number of A elements
    // so A's elements will always be considered sometime and it is smaller than B elements which we have assumed, so no problem
    if(aStart + halfK - 1 < ALength)   Amid = A[aStart + halfK - 1]
    if(bStart + halfK - 1 < BLength)   Bmid = B[bStart + halfK - 1]
    
    if(Amid < Bmid){
        return findKthSmallest(A, aStart + halfK,ALength, B, bStart,BLength, k - halfK);
    }else{
        return findKthSmallest(A, aStart,ALength, B, bStart + halfK,BLength, k - halfK)
    }
    
}


