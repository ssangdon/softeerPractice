let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");

function solution(inputs) {
  let [n, b] = inputs[0].split(" ").map(d => parseInt(d));
  console.log(n, b);
  let arr = inputs[1].split(" ").map(d => parseInt(d));
  arr.sort((a, b) => a - b);
  let stack = [];
  console.log(arr);
}
solution(input);
