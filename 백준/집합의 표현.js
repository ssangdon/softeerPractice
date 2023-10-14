let inputs = require("fs").readFileSync("c.txt").toString().trim().split("\n");
function solution(input) {
  let [n, m] = input[0].split(" ").map(d => parseInt(d));
  let num = new Array(n + 1).fill().map((_, i) => i);
  let answer = 0;

  const getParent = (arr, x) => {
    if (arr[x] === x) return x;
    return getParent(arr, arr[x]);
  };

  const unionParent = (arr, x, y) => {
    let a = getParent(arr, x);
    let b = getParent(arr, y);
    if (a < b) arr[b] = a;
    else arr[a] = b;
  };
  const findParent = (arr, x, y) => {
    let a = getParent(arr, x);
    let b = getParent(arr, y);
    if (a === b) return true;
    else return false;
  };
  for (var i = 1; i < 1 + m; i++) {
    let [command, a, b] = input[i].split(" ").map(d => parseInt(d));
    if (command === 0) {
      unionParent(num, a, b);
    } else {
      if (findParent(num, a, b)) {
        console.log("YES");
      } else {
        console.log("NO");
      }
    }
  }
}
solution(inputs);
