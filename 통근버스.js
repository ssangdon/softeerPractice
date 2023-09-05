let inputs = require("fs").readFileSync("a.txt").toString().trim().split("\n");
const getCombination = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map(d => [d]);
  arr.forEach((fixed, idx, origin) => {
    let rest = origin.slice(idx + 1);
    let combination = getCombination(rest, selectNum - 1);
    let attached = combination.map(d => [fixed, ...d]);
    result.push(...attached);
  });
  return result;
};
function solution(input) {
  let n = parseInt(input[0].trim());
  let answer = 0;
  let order = input[1]
    .trim()
    .split(" ")
    .map(d => parseInt(d));
  //   let list = getCombination(order, 3);
  //   console.log(list);
  //   list.forEach(data => {
  //     let [a1, a2, a3] = data;
  //     if (a2 > a1 && a1 > a3) {
  //       answer++;
  //     }
  //   });
  let arr = Array.from(Array(n), () => Array(n).fill(0));

  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n - 1; j++) {
      if (order[i] < order[j]) {
        arr[i][j] = arr[i][j - 1] + 1;
      } else {
        arr[i][j] = arr[i][j - 1];
      }
    }
  }
  for (var j = 0; j < n; j++) {
    for (var k = j + 2; k < n; k++) {}
  }
  console.log(order);
  console.log(arr);
  console.log(answer);
}
solution(inputs);
