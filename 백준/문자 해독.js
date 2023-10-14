let inputs = require("fs").readFileSync("e.txt").toString().trim().split("\n");
function solution(input) {
  let [wLength, sLength] = input[0].split(" ").map(d => parseInt(d));
  let answer = 0;
  let w = input[1];
  let splited = w.split("");
  let obj = {};
  splited.forEach(d => (obj[d] === undefined ? (obj[d] = 1) : obj[d]++));
  let s = input[2];
  let p = 0;
  let end = sLength - wLength;
  while (p <= end) {
    let clone = JSON.parse(JSON.stringify(obj));

    for (var i = p; i < p + wLength; i++) {
      if (clone[s[i]] > 0) {
        if (i === p + wLength - 1) {
          //   console.log(p, i, clone, 11111);
          p++;
          answer++;
          break;
        } else {
          //   console.log(p, i, clone);
          clone[s[i]]--;
        }
      } else if (clone[s[i]] === 0) {
        p++;
        break;
      } else if (clone[s[i]] === undefined) {
        p = i + 1;
        break;
      }
    }
  }
  console.log(answer);
}
solution(inputs);
