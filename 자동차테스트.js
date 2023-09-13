let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");
function solution(inputs) {
  let [len, lineNum] = inputs[0].split(" ");
  let arr = inputs[1].split(" ").map(d => parseInt(d));
  let max = Math.max(...arr);
  let obj = {};
  let dp = new Array(max + 1).fill(0);
}
solution(input);

// 1 2 3 5 6
