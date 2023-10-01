let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");
function solution(inputs) {
  let n = inputs[0];
  let count = 0;
  let course = [];
  let endMax = 0;

  let time = 0;
  for (var i = 1; i <= n; i++) {
    let [start, end] = inputs[i].split(" ").map(d => parseInt(d));
    endMax = Math.max(end, endMax);
    let obj = {
      num: i,
      start,
      end,
    };
    course.push(obj);
  }
  let arr = new Array(endMax + 1).fill(false);
  course.sort((a, b) => a.end - a.start - (b.end - b.start));
  course.forEach(d => {
    let check = true;
    let dif = d.end - d.start;
    for (var i = d.start; i <= d.end; i++) {}
    if (check) {
      for (var i = d.start; i <= d.end; i++) {
        arr[i] = true;
      }
      count++;
    }
  });
  console.log(count);
}
solution(input);
