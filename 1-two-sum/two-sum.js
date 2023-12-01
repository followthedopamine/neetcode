/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (49.14%)
 * Likes:    43865
 * Dislikes: 1437
 * Total Accepted:    9.1M
 * Total Submissions: 18.3M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 *
 *
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n^2) time
 * complexity?
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
};
// @lc code=end
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) => {
//   let sortedNums = [...nums];
//   sortedNums.sort((a, b) => {
//     return a - b;
//   });
//   let high = sortedNums.length - 1;
//   let low = 0;

//   for (let i = 0; i < sortedNums.length; i++) {
//     if (sortedNums[low] + sortedNums[high] === target) {
//       if (sortedNums[low] == sortedNums[high]) {
//         return [
//           nums.indexOf(sortedNums[low]),
//           nums.indexOf(sortedNums[high], nums.indexOf(sortedNums[low]) + 1),
//         ];
//       }
//       return [nums.indexOf(sortedNums[low]), nums.indexOf(sortedNums[high])];
//     }
//     if (sortedNums[low] + sortedNums[high] > target) high--;
//     if (sortedNums[low] + sortedNums[high] < target) low++;
//   }
// };

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) => {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const answerIndex = Object.values(map).indexOf(target - nums[i]);
//     if (answerIndex > -1) return [answerIndex, i];
//     map[i] = nums[i];
//   }
// }

// The first thing that jumps out at me with this problem is that it's a lot easier if the array is sorted, after it's sorted we could easily binary search or use two pointers to find the target. I'm just not sure if there's an even faster way.

// I think if we sort and then use a binary search we'd have a time complexity of O(logn)

// [3,2,4]\n6

// I'm sure there's a simpler solution than the one I've used here but this one is comparitively faster than most.

// 60/60 cases passed (54 ms)
// Your runtime beats 82.96 % of javascript submissions
// Your memory usage beats 13.97 % of javascript submissions (44.1 MB)

// There's a much cleaner solution where we use a hash map that's actually a lot slower in Javascript which would be a lot quicker in most languages but Javascript doesn't have a built in way to search for values.

// 60/60 cases passed (234 ms)
// Your runtime beats 5.01 % of javascript submissions
// Your memory usage beats 5.15 % of javascript submissions (48.1 MB)

// If instead of storing the answer in the value of the hash map (which is difficult to search in Javascript) we store the answer in the key of the hash map (much faster to search) we can come up with a clean solution that's even quicker than the first one.

// 60/60 cases passed (53 ms)
// Your runtime beats 85.62 % of javascript submissions
// Your memory usage beats 43.94 % of javascript submissions (42.8 MB)
