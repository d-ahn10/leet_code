/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    if (!nums.includes(target)) {
        return [-1,-1];
    } else if (nums.length === 1) {
        return [0,0];
    } else {

        let arrLen = nums.length;
        let targetFlagStart = false;
        let targetFlagEnd = false

        const ans = [];

        let currNum = 0;

        for (let index = 0; index < arrLen; index++) {
            currNum = nums[index];
            if (currNum === target && !targetFlagStart) {
                targetFlagStart = true;
                ans[0] = index;
                if (index+1 === arrLen - 1 && nums[index+1] === target) {
                    ans[1] = index+1;
                    return ans;
                } else {
                    ans[1] = ans[0];
                }
            } else if (currNum === target && nums[index+1] === target) {
                continue;
            } else if (currNum === target && nums[index+1] !== target && targetFlagStart && !targetFlagEnd) {
                ans[1] = index;
            }
        }
        return ans;
    }
};
