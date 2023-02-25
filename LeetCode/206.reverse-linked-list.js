/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prevNode = null;
    let currentNode = head;
    let nextNode = null;
    while (currentNode !== null) {
        // save next
        nextNode = currentNode.next;
        // reverse
        currentNode.next = prevNode;
        // advance nodes
        prevNode = currentNode;
        currentNode = nextNode;
    }
    return prevNode;
};
// @lc code=end
