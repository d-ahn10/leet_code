/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (numMap[nums[i]]) {
            numMap[nums[i]]++;
        } else {
            numMap[nums[i]] = 1;
        }
    }
    
    for (let num in numMap) {
        if (numMap[num] == 1) {
            return num;
        }
    }
    
   
};
