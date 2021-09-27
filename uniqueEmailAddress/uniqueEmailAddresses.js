var numUniqueEmails = function(emails) {
  emails = emails || []
  emails = emails.map(email => filterString(email));
  let emailSet = new Set(emails);
  return Array.from(emailSet).length;
};

var filterString = function(string) {
    let atIndex = -1;
    let plusIndex = -1;
    let isPlus = false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '+' && !isPlus) {
            plusIndex = i;
            isPlus = true;
        }
        if (string[i] === '@') {
            atIndex = i;
            break;
        }
    }
    let len = string.split('').slice(plusIndex, atIndex).length;
    string = string.split('');
    string.splice(plusIndex, len)
    let result = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '@') {
        atIndex = i;
        break;
      }
      if (string[i] !== '.') { result.push(string[i])}
    }
    result = result.concat(string.slice(atIndex, string.length));
    return result.join('');
}

let emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
console.log(numUniqueEmails(emails));