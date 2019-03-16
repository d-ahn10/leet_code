/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public TreeNode SortedArrayToBST(int[] nums) { // main function taking in an array of ints
        return this.binarySearchTreeRecursion(nums, 0, nums.Length -1); //Length -1 because index goes out                                                                              of bounds.
        // return function call of helper function recursively. (3 arguments: int array, int lowest                     nums(start Node), int highest num

    }
    public TreeNode binarySearchTreeRecursion(int[] nums, int lowNum, int highNum) { // define recursive                                       function call (3 params: int array, int lowest num, int highest num)
        if (highNum < lowNum) {
            return null; // puts null in the empty spot of node
        }

        int midNum = (highNum - lowNum) / 2 + lowNum;

        var balancedTree = new TreeNode(nums[midNum]) { // builds the balanced tree and is assigned to left                                                              and right.
            left = this.binarySearchTreeRecursion(nums, lowNum, midNum - 1),
            right = this.binarySearchTreeRecursion(nums, midNum + 1, highNum),
        };
        return balancedTree;
    }
}
