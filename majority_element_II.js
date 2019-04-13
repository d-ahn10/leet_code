/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    // grab the num length divided by 3 and save it into a unit called goalNum
    // create a blank table object to fill later and save it into a unit called tableNumObj
    // create a blank answer array to fill later and save it into a unit called ansNumArr
    // step through each number in the nums and save each item into a unit called eachNum
    
    // create a function to run eachNum with tableNumObj to keep track of the numbers (object look up table)
    // if key doesn't exist, assign the key into tableNumObj and give it a value of 1
    // else increment the key value by 1;
    
    // hop through the tableNumObj and check if the key value is greater than the goalNum
    // if yes, add the key into the ansNumArr
    // print ansNumArr
    
    let goalNum = nums.length / 3;
    const tableNumObj = {};
    const ansNumArr = [];
    
    for(let i = 0; i < nums.length; i++) {
        let eachNum = nums[i];
        createTable(eachNum);
    }
    
    for(let key in tableNumObj) {
        if(tableNumObj[key] > goalNum) {
            ansNumArr.push(key);
        }
    }
    
    function createTable(num) {
        if(!tableNumObj[num]){
            tableNumObj[num] = 1;
        } else {
            tableNumObj[num]++;
        }
    }
    
    return ansNumArr;
};
