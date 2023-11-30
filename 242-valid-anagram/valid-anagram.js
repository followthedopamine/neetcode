/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (62.83%)
 * Likes:    8002
 * Dislikes: 256
 * Total Accepted:    1.9M
 * Total Submissions: 3M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const countingArray = Array(26).fill(0);
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    countingArray[s.charCodeAt(i) - 97]++;
    countingArray[t.charCodeAt(i) - 97]--;
  }
  for (let i = 0; i < countingArray.length; i++) {
    if (countingArray[i] != 0) return false;
  }
  return true;
};
// @lc code=end

// Just like the last puzzle there are a couple of obvious solutions, we could sort the two arrays of letters and compare the strings but that's going to be Ologn time complexity.

// We could do it faster by either creating two arrays of 26 0s and increase the array by 1 in the place of each letter when when find it then decrease for the second string. If all of the values of the array are 0 after both strings then it's a valid anagram.

// We could also use an unordered set in the same way as we would use the array but I'm fairly sure the array is slightly more efficient. They're both On time complexity but I suspect in most languages accessing elements in an array is going to be quicker, and since there's a maximum of 26 options we don't need the uncapped nature of the unordered set.

// 42/42 cases passed (43 ms)
// Your runtime beats 99.93 % of javascript submissions
// Your memory usage beats 99.41 % of javascript submissions (41.6 MB)
