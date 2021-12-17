/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// @param {TreeNode} root
// @param {number} low
// @param {number} high
// @return {number}s

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

 var rangeSumBST = function(root, low, high) {
  let sum = 0;
  const binarySum = (node) => {
    if (node.val >= low && node.val <= high) { sum += node.val; }
    if (node.right === undefined && node.left === undefined) { return; }
    node.right ? binarySum(node.right) : null
    node.left ? binarySum(node.left) : null
  }
  binarySum(root)
  return sum;
};

//                  node1
//           node2         node3
//       node4                 node5
//   node6   node7

let node7 = new Node(10, undefined, undefined);
let node6 = new Node(4, undefined, undefined);
let node5 = new Node(22, undefined, undefined);
let node4 = new Node(7, node6, node7);
let node3 = new Node(18, undefined, node5);
let node2 = new Node(9, node4, undefined);
let node1 = new Node(16, node2, node3);

let sum = rangeSumBST(node1, 8, 11);
console.log(sum);