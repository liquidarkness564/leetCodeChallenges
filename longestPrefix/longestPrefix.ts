function longestCommonPrefix(strs: string[]): string {
  let longestPrefix: string = strs[0];
  for (let i: number = 1; i < strs.length; i++) {
    for (let j: number = 0; j < strs[i].length; j++) {
      if (!strs[i][j] || !longestPrefix[j]) { break; }
      if (longestPrefix[j] !== strs[i][j]) {
        longestPrefix = strs[i].slice(0, j);
      }
    }
  }
  return longestPrefix;
};

console.log(longestCommonPrefix(['awesome', 'awe-inspiring', 'awestruck']))