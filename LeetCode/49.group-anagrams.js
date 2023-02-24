/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let obj = {};
    for (let word of strs) {
        let sortedLetters = word.split('').sort().join('');
        obj[sortedLetters] ? obj[sortedLetters].push(word) : obj[sortedLetters] = [word];
    }
    return Object.values(obj);
};
// @lc code=end

