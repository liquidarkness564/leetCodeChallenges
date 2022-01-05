function longestCommonPrefix(strs) {
    var longestPrefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        for (var j = 0; j < strs[i].length; j++) {
            if (!strs[i][j] || !longestPrefix[j]) {
                break;
            }
            if (longestPrefix[j] !== strs[i][j]) {
                longestPrefix = strs[i].slice(0, j);
            }
        }
    }
    return longestPrefix;
}
;
console.log(longestCommonPrefix(['awesome', 'awe-inspiring', 'awestruck']));
