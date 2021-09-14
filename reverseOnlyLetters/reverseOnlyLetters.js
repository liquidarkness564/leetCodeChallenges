/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3974/

Reverse Only Letters
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

 var reverseOnlyLetters = function(s) {
   let string = '';
  for (let i = s.length - 1; i > -1; i--) {
    if (letters.includes(s[i])) { string += s[i] }
  }
  string = string.split('');
  for (let i = 0; i < s.length; i++) {
    if (!letters.includes(s[i])) { string.splice(i, 0, s[i])}
  }
  return string.join('');
};

console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));

module.exports = reverseOnlyLetters;