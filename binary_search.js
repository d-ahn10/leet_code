/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length;
    let midPoint = Math.floor(len/2);
    
    let index = 0;
    if (nums.indexOf(target) >= midPoint) {
        index = midPoint;
    }

    for (let i = index; i < len; i++) {
        if (target === nums[i]) {
            return nums.indexOf(nums[i]);
        }
    }
    
    return -1;
};
