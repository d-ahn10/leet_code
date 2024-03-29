/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    const incrementedList = [];
    
    for (const element of nums) {
        if (incrementedList[element]) {
            incrementedList[element]++;
        } else {
            incrementedList[element] = 1;
        }
    }
    
    let i = 0;
 
    for (let [index, val] of incrementedList.entries()) {
        while (val > 0) {
            nums[i] = index;
            val--;
            i++;
        } 
    }
    return; 
};

sortColors([2,0,2,1,1,0]); // [0,0,1,1,2,2]
sortColors([2,0,1]); // [0,1,2]
