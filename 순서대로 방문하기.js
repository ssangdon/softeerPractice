let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");
function solution(inputs) {
  let [n, m] = inputs[0].split(" ").map(d => +d);
  let course = [];
  for (var i = 1; i < 1 + n; i++) {
    course.push(inputs[i].split(" ").map(d => +d));
  }
  let visited = Array.from(Array(n), () => Array(n).fill(0));
  let needVisit = [];
  for (var k = 1 + n; k < 1 + n + m; k++) {
    needVisit.push(inputs[k].split(" ").map(d => +d - 1));
  }
  let count = 0;
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let [s1, s2] = needVisit[0];
  const back = (s1, s2, idx) => {
    let [n1, n2] = needVisit[idx + 1];
    visited[s1][s2] = 1;
    if (s1 === n1 && s2 === n2) {
      if (idx === m - 2) {
        count++;
        return;
      } else {
        back(n1, n2, idx + 1);
      }
    }
    for (var k = 0; k < 4; k++) {
      let lx = s1 + dx[k];
      let ly = s2 + dy[k];
      if (
        lx >= 0 &&
        ly >= 0 &&
        lx < n &&
        ly < n &&
        course[lx][ly] === 0 &&
        visited[lx][ly] === 0
      ) {
        visited[lx][ly] = 1;
        back(lx, ly, idx);
        visited[lx][ly] = 0;
      }
    }
  };
  back(s1, s2, 0);
  console.log(count);
}
solution(input);
