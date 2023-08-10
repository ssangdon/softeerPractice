let inputs = require("fs").readFileSync("a.txt").toString().trim().split("\n");
let check = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  K: 0,
  L: 0,
  M: 0,
  N: 0,
  O: 0,
  P: 0,
  Q: 0,
  R: 0,
  S: 0,
  T: 0,
  U: 0,
  V: 0,
  W: 0,
  X: 0,
  Y: 0,
  Z: 0,
};
let hash = {};
function solution(input) {
  let word = input[0].trim();
  let key = input[1].trim();
  let keyLen = key.length;
  let keyIdx = 0;
  let result = [];
  let board = Array.from(Array(5), () => Array(5).fill(0));
  for (var i = 0; i < 5; i++) {
    for (var k = 0; k < 5; k++) {
      while (check[key[keyIdx]] === 1 && keyIdx < keyLen) {
        keyIdx += 1;
      }

      board[i][k] = key[keyIdx];
      check[key[keyIdx]] = 1;
    }
  }

  let entries = Object.entries(check);
  let enIdx = 0;
  let copy = entries.filter(d => d[1] !== 1);
  copy.sort((a, b) => a[0] - b[0]);
  for (var a = 0; a < 5; a++) {
    for (var b = 0; b < 5; b++) {
      if (board[a][b] === undefined) {
        board[a][b] = copy[enIdx][0];
        enIdx++;
      }
    }
  }
  let arr = [];
  let idx = 0;
  let stack = [];
  //   let word = "";

  for (var i = 0; i < word.length; i++) {
    stack.push(word[i]);
    if (stack.length === 2) {
      let popped2 = stack.pop();
      let popped1 = stack.pop();
      if (popped1 === popped2) {
        if (popped1 === "X") {
          let str = popped1 + "Q";
          arr.push(str);
          stack.push(popped2);
        } else {
          let str = popped1 + "X";
          arr.push(str);
          stack.push(popped2);
        }
      } else {
        let str = popped1 + popped2;
        arr.push(str);
      }
    }
  }
  // yyxxx
  // yx yx xq xx
  if (stack.length) {
    arr.push(stack[0] + "X");
  }
  //   console.log(arr);
  //   console.log(arr);
  //   console.log(board);

  for (var q = 0; q < 5; q++) {
    for (var w = 0; w < 5; w++) {
      hash[board[q][w]] = [q, w];
    }
  }
  arr.forEach((data, idx) => {
    let [x, y] = data.split("");
    let [x1, y1] = hash[x];
    let [x2, y2] = hash[y];
    if (x1 === x2) {
      y1 === 4 ? (y1 = 0) : y1++;
      y2 === 4 ? (y2 = 0) : y2++;
      let str2 = board[x1][y1] + board[x2][y2];

      result.push(str2);
    } else if (y1 === y2 && x1 !== x2) {
      x1 === 4 ? (x1 = 0) : x1++;
      x2 === 4 ? (x2 = 0) : x2++;
      let str2 = board[x1][y1] + board[x2][y2];

      result.push(str2);
    } else {
      let str2 = board[x1][y2] + board[x2][y1];
      result.push(str2);
    }
  });
  console.log(result.join("").trim());
}

solution(inputs);
