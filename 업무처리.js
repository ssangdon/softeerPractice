let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");
// 1 -> 3
// 2 -> 7
// 3 -> 15

function solution(inputs) {
  let [h, k, r] = inputs[0].split(" ").map(d => parseInt(d));
  let treeObj = {};
  let dp = new Array(h).fill(0);
  dp[0] = 0;
  dp[1] = 3;
  for (var i = 2; i <= h; i++) {
    dp[i] = dp[i - 1] + 2 ** i;
  }
  let lastNodeNum = 2 ** h;
  let total = dp[h];
  for (var j = 1; j <= total; j++) {
    if (j == 1) {
      treeObj[j] = {
        parent: "none",
        queue: new Array(),
      };
    } else if (j < lastNodeNum) {
      treeObj[j] = {
        parent: Math.floor(j / 2),
        queue: new Array(),
      };
    } else {
      treeObj[j] = {
        parent: Math.floor(j / 2),
        works: new Array(),
      };
    }
  }
  let completed = [];
  for (var z = 1; z < inputs.length; z++) {
    treeObj[lastNodeNum].works = inputs[z].split(" ").map(d => parseInt(d));
    lastNodeNum++;
  }
  while (r > 0) {
    if (treeObj[1].queue.length !== 0) {
      let sh = treeObj[1].queue.shift();
      completed.push(sh);
    }

    if (r % 2 == 0) {
      for (var b = 3; b < 2 ** h + 1; b += 2) {
        if (treeObj[b].queue.length !== 0) {
          let work = treeObj[b].queue.shift();
          let parent = treeObj[b].parent;
          treeObj[parent].queue.push(work);
        }
      }
      for (var a = 2 ** h + 1; a <= total; a += 2) {
        if (treeObj[a].works.length !== 0) {
          let shifted = treeObj[a].works.shift();
          let parentIdx = treeObj[a].parent;
          treeObj[parentIdx].queue.push(shifted);
        }
      }
    } else {
      for (var b = 2; b < 2 ** h; b += 2) {
        if (treeObj[b].queue.length !== 0) {
          let work = treeObj[b].queue.shift();
          let parent = treeObj[b].parent;
          treeObj[parent].queue.push(work);
        }
      }
      for (var a = 2 ** h; a <= total; a += 2) {
        if (treeObj[a].works.length !== 0) {
          let shifted = treeObj[a].works.shift();
          let parentIdx = treeObj[a].parent;
          treeObj[parentIdx].queue.push(shifted);
        }
      }
    }

    r--;
  }
  let sum = completed.reduce((prev, now) => (prev += now), 0);
  console.log(sum);
}
solution(input);
