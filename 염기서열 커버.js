let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");
function solution() {
  let [n, m] = input[0].split(" ").map(d => parseInt(d));
  let arr = new Array(n);
  for (var i = 1; i < input.length; i++) {
    arr[i - 1] = input[i];
  }
  let count = [];
  arr.sort((a, b) => (a > b ? 1 : -1));
  while (arr.length) {
    let popped = arr.pop();
  }
}
solution(input);
