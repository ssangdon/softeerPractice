let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");
let answer = [];
let inputs = input.map(d => d.split(" "));
let num = parseInt(inputs[0][0]);
let obj = {};
for (var j = 0; j < parseInt(inputs[0][0]); j++) {
  obj[j + 1] = [];
}
for (var i = 1; i < inputs.length; i++) {
  let [x, y] = inputs[i];
  if (obj[y] === undefined) {
    obj[y] = [x];
  } else {
    obj[y].push(x);
  }
}
let maxNum = 0;
for (var k = 0; k < num; k++) {
  let total = 0;
  let needVisit = obj[k + 1].slice();
  let visited = [];
  while (needVisit.length) {
    let popped = needVisit.pop();
    if (!visited.includes(popped)) {
      visited.push(popped);
      needVisit.push(...obj[popped]);
      total++;
    }
  }
  if (total > maxNum) {
    answer = [];
    answer.push(k + 1);
    maxNum = total;
  } else if (total === maxNum) answer.push(k + 1);
}

console.log(answer.join(" "));
