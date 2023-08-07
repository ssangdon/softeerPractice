let inputs = require("fs").readFileSync("a.txt").toString().trim().split("\n");

// 1 -> 3
// 2 -> 7
// 3 -> 15
// 4 -> 31

function solution(input) {
  let [h, k, days] = input[0].split(" ");
  let workLen = input.length - 1;
  let tree = {};
  let dp = new Array(h).fill(0);
  dp[0] = 1;
  dp[1] = 3;
  for (var i = 2; i <= h; i++) {
    dp[i] = dp[i - 1] + Math.pow(2, i);
  }
  for (var j = 1; j <= dp[h]; j++) {
    let obj = {
      parent: j === 1 ? "none" : Math.floor(j / 2),
      work: new Array(0),
    };
    tree[j] = obj;
  }
  let num = dp[h] - workLen + 1;
  //   console.log(dp);
  for (var a = 1; a <= workLen; a++) {
    tree[num].work = input[a].split(" ");
    num++;
  }
  let transDate = 1;
  let queue = [];
  while (days > 0) {
    if (days % 2 == 0) {
      for (var i = 3; i <= dp[h]; i += 2) {
        if (tree[i].work.length > 0) {
          let shifted = tree[i].work.shift();
          if (queue.length > 0) {
            tree[1].work = [...tree[1].work, ...queue];
            queue = [];
          }
          if (tree[i].parent == 1) {
            queue.push(shifted);
          } else {
            tree[tree[i].parent].work.push(shifted);
          }
        }
      }
    } else {
      for (var i = 2; i <= dp[h]; i += 2) {
        if (tree[i].work.length > 0) {
          let shifted = tree[i].work.shift();
          if (queue.length > 0) {
            tree[1].work = [...tree[1].work, ...queue];
            queue = [];
          }
          if (tree[i].parent == 1) {
            queue.push(shifted);
          } else {
            tree[tree[i].parent].work.push(shifted);
          }
        }
      }
    }
    days--;
  }
  let sum = 0;
  for (var i = 0; i < tree[1].work.length; i++) {
    sum += parseInt(tree[1].work[i]);
  }
  console.log(tree);
  console.log(sum);
}

solution(inputs);
