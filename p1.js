let inputs = require("fs").readFileSync("a.txt").toString().trim().split("\n");

function solution(input) {
  let [limit, n] = input[0].split(" ").map(d => parseInt(d));
  let sum = 0;
  let obj = [];
  for (var i = 1; i < input.length; i++) {
    let [weight, price] = input[i].split(" ").map(d => parseInt(d));
    let o = {
      total: weight,
      perPrice: price,
    };
    obj.push(o);
  }
  obj.sort((a, b) => b.perPrice - a.perPrice);
  let idx = 0;
  while (limit > 0) {
    if (limit >= obj[idx].total) {
      limit -= obj[idx].total;
      sum += obj[idx].total * obj[idx].perPrice;
      idx++;
    } else {
      sum += limit * obj[idx].perPrice;
      limit = 0;
    }
  }
  console.log(sum);
}
solution(inputs);
