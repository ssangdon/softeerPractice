let inputs = require("fs").readFileSync("f.txt").toString().trim().split("\n");
function solution(input) {
  let grade = {};
  let month = parseInt(input[0]);
  let arr = input[1].split(" ").map((d, i) => parseInt(d));
  let gradeArr = input[2];
  let answer = 0;
  let limit = arr[3];

  let cash = new Array(month + 1).fill(0);
  grade["B"] = [0, arr[0] - 1];
  grade["S"] = [arr[0], arr[1] - 1];
  grade["G"] = [arr[1], arr[2] - 1];
  grade["P"] = [arr[2], arr[3] - 1];
  grade["D"] = [arr[3]];
  //   console.log(gradeArr);
  for (var i = 1; i <= month; i++) {
    let cGrade = gradeArr[i - 1];
    let [min, max] = grade[cGrade];
    let before = cash[i - 1];
    let can = max - before;
    if (can < limit) {
      answer += can;
      cash[i] = can;
    } else {
      answer += limit;
      cash[i] = limit;
    }
  }
  console.log(answer);
}
solution(inputs);
// 1 29
// 2 30
// 3 59
