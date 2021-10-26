function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
  let num1 = '';
  let num2 = '';
  while (l1 !== null) {
      num1 += l1.val;
      l1 = l1.next;
  }
  while (l2 !== null) {
      num2 += l2.val;
      l2 = l2.next;
  }
  let finalString = stringReverse((Number(stringReverse(num1)) + Number(stringReverse(num2))).toString());
  let finalNode = new ListNode(Number(finalString[0]));
  let node, prevNode;
  for (let i = 1; i < finalString.length; i++) {
      if (i === 1) {
          prevNode = finalNode;
      }
      node = new ListNode(Number(finalString[i]));
      prevNode.next = node;
      prevNode = node;
  }
  return finalNode;
};

var stringReverse = (string) => {
  let result = '';
  for (let i = string.length - 1; i > -1; i--) {
      result += string[i];
  }
  return result;
}

// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]
let string1 = '1000000000000000000000000000001';
let string2 = '564';

let finalNode = new ListNode(Number(finalString[0]));
let node, prevNode;
for (let i = 1; i < finalString.length; i++) {
    if (i === 1) {
        prevNode = finalNode;
    }
    node = new ListNode(Number(finalString[i]));
    prevNode.next = node;
    prevNode = node;
}

let node13 = new ListNode(3);
let node12 = new ListNode(7, node13);
let node11 = new ListNode(5, node12);
// 573

let node23 = new ListNode(4);
let node22 = new ListNode(2, node23);
let node21 = new ListNode(8, node22);
// 824
// final = 7931;

console.log(addTwoNumbers(node11, node21));

module.exports = {
    addTwoNumbers, stringReverse
};