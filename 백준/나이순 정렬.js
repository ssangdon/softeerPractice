let inputs = require("fs").readFileSync("b.txt").toString().trim().split("\n");
function solution(input) {
  let num = parseInt(input[0]);
  let arr = [];
  for (var i = 1; i < 1 + num; i++) {
    arr.push(input[i].split(" "));
  }
  arr.sort((a, b) => {
    return parseInt(a[0]) > parseInt(b[0]) ? 1 : -1;
  });
  arr.forEach(d => {
    console.log(d.join(" ").trim());
  });
}
solution(inputs);
