let input = require("fs").readFileSync("a.txt").toString().trim();
const solution = () => {
  if (input === "div") {
    console.log("<div></div>");
  } else if (input === "li") {
    console.log("<li></li>");
  } else if (input === "p") {
    console.log("<p></p>");
  }
};

solution();
