/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let firstPointer = 0;
	let secondPointer = nums.length - 1;
  	let resultContainer = 0;

	while (firstPointer < secondPointer) {
	    resultContainer = nums[firstPointer] + nums[secondPointer];
		
	    if (resultContainer === target) {
			return [firstPointer, secondPointer];	
	    }
		secondPointer--;

		if (secondPointer === firstPointer) {
			firstPointer++;
			secondPointer = nums.length - 1;
		}
	}
};
