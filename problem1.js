let input = require("fs").readFileSync("a.txt").toString().trim().split(",");
const makeScore = (saero, garo, c1, c2, arr, num) => {
  for (var i = saero; i < saero + c1; i++) {
    for (var k = garo; k < garo + c2; k++) {
      arr[i][k] = num;
    }
  }
  return arr;
};

const sol = () => {
  let score = Array.from(Array(16), () => Array(16).fill(0));
  score = makeScore(1, 9, 6, 2, score, 1);
  score = makeScore(9, 9, 6, 2, score, 2);
  score = makeScore(9, 5, 6, 2, score, 3);
  score = makeScore(1, 5, 6, 2, score, 4);
  score = makeScore(2, 11, 3, 3, score, 5);
  score = makeScore(11, 2, 3, 3, score, 6);
  score = makeScore(2, 2, 3, 3, score, 7);
  score = makeScore(11, 11, 3, 3, score, 8);
  score = makeScore(7, 9, 2, 5, score, 9);
  score = makeScore(7, 2, 2, 5, score, 10);
  score = makeScore(9, 7, 5, 2, score, 11);
  score = makeScore(2, 7, 5, 2, score, 12);
  score = makeScore(5, 11, 2, 4, score, 13);
  score = makeScore(9, 11, 2, 4, score, 14);
  score = makeScore(9, 1, 2, 4, score, 15);
  score = makeScore(5, 1, 2, 4, score, 16);
  score = makeScore(0, 6, 2, 4, score, 17);
  score = makeScore(14, 6, 2, 4, score, 18);
  score = makeScore(6, 0, 4, 2, score, 19);
  score = makeScore(6, 14, 4, 2, score, 20);
  score = makeScore(7, 7, 2, 2, score, 25);
  score[6][10] = 13;
  score[9][10] = 14;
  score[9][5] = 15;
  score[6][5] = 16;
  score[2][2] = 0;
  score[2][13] = 0;
  score[13][2] = 0;
  score[13][13] = 0;
  let start = 40;
  let roundScore = [
    [5],
    [6],
    [7],
    [8],
    [17, 18],
    [9, 10],
    [11, 12],
    [19, 20],
    [5],
  ];
  let round = input.length / 6;
  for (var k = 0; k < round; k++) {
    let goal = roundScore[k];
    let hit = false;
    for (var i = 0; i < input.length; i += 2) {
      let y = input[i];
      let x = input[i + 1];
      for (var j = 0; j < goal.length; j++) {
        let goalNum = goal[j];
        if (score[x][y] === goalNum) {
          hit = true;
          start += goal[j];
        }
      }
    }
    if (!hit) {
      start = Math.floor(start / 2);
    }
  }
  console.log(start);

  //   console.log(score);
};
sol();
