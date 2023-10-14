let inputs = require("fs").readFileSync("d.txt").toString().trim().split("\n");
function solution(input) {
  let caseNum = parseInt(input[0]);
  let start = 1;
  for (var k = 0; k < caseNum; k++) {
    let nodeNum = parseInt(input[start++]);
    let arr = input.slice(start, start + nodeNum);
    let obj = {};
    let x, y;
    arr.forEach((d, i) => {
      let [a, b] = d.split(" ").map(d => parseInt(d));

      if (i !== arr.length - 1) {
        obj[b] = a;
      } else {
        x = a;
        y = b;
      }
    });
    let xArr = [];
    let yArr = [];
    while (x !== undefined) {
      xArr.push(x);
      x = obj[x];
    }
    while (y !== undefined) {
      yArr.push(y);
      y = obj[y];
    }
    // console.log(xArr, yArr);
    for (var z = 0; z < xArr.length; z++) {
      if (yArr.includes(xArr[z])) {
        console.log(xArr[z]);
        break;
      }
    }

    // console.log(x, y);
    // console.log(obj);
    start += nodeNum;
  }
}
solution(inputs);
