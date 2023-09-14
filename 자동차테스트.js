let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");
function solution(inputs) {
  let [len, lineNum] = inputs[0].split(" ");
  let arr = inputs[1].split(" ").map(d => parseInt(d));
  arr.sort((a, b) => a - b);
  let max = Math.max(...arr);
  let obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = i * (len - i - 1);
  }
  for (var k = 2; k < 2 + parseInt(lineNum); k++) {
    let num = parseInt(inputs[k]);
    console.log(obj[num] === undefined ? 0 : obj[num]);
  }
}
solution(input);
