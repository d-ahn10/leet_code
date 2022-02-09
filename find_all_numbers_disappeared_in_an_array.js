/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let range = nums.length;
    const realNums = grabSeries(nums);
    const missingNums = [];

    for (let i = 0; i < range; i++) {
        if (!nums.includes(realNums[i])) {
            missingNums.push(realNums[i]);
        }
    }
    return missingNums;
};

const grabSeries = function(numsList) {
    const numbersList = [];
    for (let i = 1; i < numsList.length+1; i++) {
        numbersList.push(i);
    }
    return numbersList;
}
