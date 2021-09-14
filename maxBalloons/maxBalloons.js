/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3973/

Maximum Number of Balloons

Given a string text, you want to use the characters of text to form as many
instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of
instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
*/

const maxBalloons = (str) => {
  let obj = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'l' || str[i] === 'o') {
      obj[str[i]] += 0.5;
    } else if (str[i] === 'b' || str[i] === 'a' || str[i] === 'n') {
      obj[str[i]] += 1
    }
  }

  obj.l = Math.floor(obj.l);
  obj.o = Math.floor(obj.o);

  return Math.min(...Object.values(obj));
}

console.log(maxBalloons('bbbaaaaalllllooooonn'));

module.exports = maxBalloons;