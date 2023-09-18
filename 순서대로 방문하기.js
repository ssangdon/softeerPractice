let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");
function solution(inputs) {
  let [n, m] = inputs[0].split(" ").map(d => parseInt(d));
  let count = 0;
  let board = [];
  for (var i = 1; i < 1 + n; i++) {
    let arr = inputs[i].split(" ").map(d => parseInt(d));
    board.push(arr);
  }
  let needVisit = [];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let visited = Array.from(Array(n), () => Array(n).fill(0));
  for (var k = 1 + n; k < 1 + n + m; k++) {
    let splited = inputs[k].split(" ").map(d => parseInt(d) - 1);
    needVisit.push(splited);
  }
  let [s11, s22] = needVisit[0];
  const back = (s1, s2, idx) => {
    let [e1, e2] = needVisit[idx + 1];
    visited[s1][s2] = 1;
    if (idx === needVisit.length - 2) {
      if (s1 === e1 && s2 === e2) {
        count++;
        return;
      }
    } else if (s1 === e1 && s2 === e2) {
      back(s1, s2, idx + 1);
    }

    for (var i = 0; i < 4; i++) {
      let lx = s1 + dx[i];
      let ly = s2 + dy[i];
      if (
        lx >= 0 &&
        lx < n &&
        ly >= 0 &&
        ly < n &&
        visited[lx][ly] !== 1 &&
        board[lx][ly] !== 1
      ) {
        visited[lx][ly] = 1;
        back(lx, ly, idx);
        visited[lx][ly] = 0;
      }
    }
  };

  back(s11, s22, 0);
}
solution(input);
