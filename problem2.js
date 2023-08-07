let input = require("fs").readFileSync("a.txt").toString().trim().split("\n");
const sol = () => {
  let queue = [];
  let obj = {};
  let result = [];
  for (var i = 1; i < input.length; i++) {
    let val = input[i];
    let [command, name] = val.split(" ");
    if (command === "enqueue") {
      queue.push(name);
      if (obj[name] === undefined) {
        obj[name] = 1;
      } else {
        obj[name] += 1;
      }
    } else if (command === "dequeue") {
      if (queue.length === 0) {
        result.push("*");
      } else {
        let entries = Object.entries(obj);
        entries.sort((a, b) => b[1] - a[1]);
        let maxName = entries[0][0];
        let maxVal = entries[0][1];
        let sameArr = [];
        Object.values(entries).map(d => {
          if (d[1] === maxVal) {
            sameArr.push(d[0]);
          }
        });
        if (sameArr.length > 1) {
          let k = [];
          for (var j = 0; j < sameArr.length; j++) {
            if (queue.indexOf(sameArr[j]) !== -1) {
              k.push(queue.indexOf(sameArr[j]));
            }
          }

          let index = k.sort((a, b) => a - b)[0];
          let value = queue.splice(index, 1);
          obj[value] -= 1;

          result.push(...value);
        } else {
          obj[maxName] -= 1;
          let idx = queue.indexOf(maxName);
          let value = queue.splice(idx, 1);
          result.push(...value);
        }
      }
    }
  }
  console.log(result.join(" "));
};
sol();
