/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {};
    for (let i of nums) {
        obj[i] = (obj[i] || 0) + 1;
    }
    let result = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    console.log(result);

    let value = [];
    for (let i = 0; i < k; i++){
        value.push(result[i][0]);
    }
    return value;
};
// @lc code=end

