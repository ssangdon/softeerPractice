let inputs = require("fs").readFileSync("a.txt").toString().trim().split("\n");
const getCombination = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map(d => [d]);
  arr.forEach((fixed, idx, origin) => {
    let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    let combination = getCombination(rest, selectNum - 1);
    let a = combination.map(d => [fixed, ...d]);
    return result.push(...a);
  });
  return result;
};
function solution(input) {
  let [n, k] = [parseInt(input[0]), parseInt(input[1])];
  let answer = 0;
  let numArr = [];
  let results = [];
  let obj = {};
  for (var i = 2; i < n + 2; i++) {
    numArr.push(parseInt(input[i]));
  }
  results = getCombination(numArr, k);
  results.forEach(d => {
    let str = d.join("");
    if (obj[str] === undefined) {
      obj[str] = 1;
      answer++;
    }
  });
  //   console.log(results);
  console.log(answer);
}
solution(inputs);
