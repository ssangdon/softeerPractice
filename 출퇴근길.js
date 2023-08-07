let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");

function solution(inputs) {
  let answer = 0;
  let [n, m] = input[0].split(" ").map(d => parseInt(d));
  let graph = {};
  let go = [];
  let come = [];
  for (var i = 1; i <= m; i++) {
    let [x, y] = input[i].split(" ").map(d => parseInt(d));
    graph[x] === undefined ? (graph[x] = [y]) : (graph[x] = [...graph[x], y]);
  }
  let [start, end] = input
    .at(-1)
    .split(" ")
    .map(d => parseInt(d));

  let caseArr = graph[start];
  for (var i = 0; i < caseArr.length; i++) {
    let needVisit = graph[caseArr[i]].slice();
    let visited = [start, caseArr[i]];
    while (needVisit.length) {
      if (needVisit.includes(end)) {
        visited.push(end);
        break;
      }
      let shifted = needVisit.shift();
      if (!visited.includes(shifted)) {
        if (shifted === end) {
          visited.push(shifted);
          break;
        } else {
          visited.push(shifted);
          needVisit = [...graph[shifted].slice(), ...needVisit];
        }
      }
    }
    console.log(visited);
    go.push(...visited);
  }
  let caseArr2 = graph[end];
  for (var k = 0; k < caseArr2.length; k++) {
    let needVisit2 = graph[caseArr2[k]].slice();
    let visited2 = [end, caseArr2[k]];
    while (needVisit2.length) {
      if (needVisit2.includes(start)) {
        visited2.push(start);
        break;
      }
      let shifted2 = needVisit2.shift();
      if (!visited2.includes(shifted2)) {
        if (shifted2 === start) {
          visited2.push(shifted2);
          break;
        } else {
          visited2.push(shifted2);
          needVisit2 = [...graph[shifted2].slice(), ...needVisit2];
        }
      }
    }
    console.log(visited2);
    come.push(...visited2);
  }
  let goSet = [...new Set(go)];
  let comeSet = [...new Set(come)];
  for (let val of goSet) {
    if (val !== start && val !== end && comeSet.includes(val)) {
      answer++;
    }
  }
  //   console.log(goSet, comeSet);
  console.log(answer);
}
solution(input);
