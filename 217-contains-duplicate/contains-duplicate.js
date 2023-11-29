/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (61.31%)
 * Likes:    7953
 * Dislikes: 1089
 * Total Accepted:    2.4M
 * Total Submissions: 3.9M
 * Testcase Example:  '[1,2,3,1]'
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const set = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (set[num] !== undefined) return true;
    set[num] = 1;
  }
  return false;
};
// @lc code=end

// The simplest answer I can think of would be to sort the array and check if a[n] = a[n+1] but with a long list that's going to be reasonably inefficient as the best sorting algorithms are still only Ologn.

// Another answer would be to compare every number to every other number but that's even less efficient as you'd need a stacked loop so it'd be On^2.

// The best answer I can think of is to use a set, since I'm writing in JS I'll just use an object. Using a set we can add all of our numbers in to a new object and check each number as we progress through the integer array which would give us On time complexity.

// Since we know set[nums[i]] will never be set to undefined we can check to see if it exists by comparing with undefined however this isn't always going to be the best approach in real world scenarios, we probably typically want to use set.hasOwnProperty(num).

// 75/75 cases passed (67 ms)
// Your runtime beats 94.09 % of javascript submissions
// Your memory usage beats 51.39 % of javascript submissions (54.4 MB)
