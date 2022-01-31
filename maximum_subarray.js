/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = -Infinity;
    let largestSum = -Infinity;
    
    for (let num of nums) {
        currSum = Math.max(num, (currSum + num));
        largestSum = Math.max(largestSum, currSum);
    }
    
    return largestSum;
};

