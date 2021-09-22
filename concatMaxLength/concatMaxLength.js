var maxLength = function(arr) {
    if (!arr.length) { return 0; }
    if (arr.length === 1) { return arr[0].length; }
    let max = 0;
    var addString = function(str, index) {
        if (index <= arr.length) {
          for (let i = index; i < arr.length; i++) {
              addString(str + arr[i], i+1);
              if (isUnique(str) && str.length > max) {
                max = str.length;
              }
          }
        }
    }
    addString('', 0);
    return max;
};

var isUnique = (str) => {
  let obj = {}
  for (var i = 0; i < str.length; i++) {
      if (!obj.hasOwnProperty(str[i])) {
          obj[str[i]] = 0;
      } else {
          obj[str[i]] += 1;
      }
  }
  for (let key in obj) {
      if (obj[key] > 0) { return false; }
  }
  return true;
}

let arr = ["cha","r","act","ers"];
console.log(maxLength(arr));