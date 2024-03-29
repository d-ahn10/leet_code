/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let insert = m + n - 1;
    let firstPointer = m - 1;
    let secondPointer = n - 1;

    while (secondPointer >= 0) {
        let firstValue = nums1[firstPointer];
        let secondValue = nums2[secondPointer];

        if (firstValue > secondValue) {
            nums1[insert] = firstValue;
            insert--;
            firstPointer--;
        } else {
            nums1[insert] = secondValue;
            insert--;
            secondPointer--;
        }
    }

};

merge([1,2,3,0,0,0], 3, [2,5,6], 3); // [1,2,2,3,5,6]
merge([4,5,6,0,0,0], 3, [1,2,3], 3); // [1,2,3,4,5,6]
