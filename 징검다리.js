let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");

function solution(inputs) {
  let num = parseInt(inputs[0]);
  let arr = inputs[1].split(" ").map(d => +d);
  let dp = new Array(num).fill(1);
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(Math.max(...dp));
}

solution(input);
