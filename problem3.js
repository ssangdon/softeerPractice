let input = require("fs").readFileSync("a.txt").toString().trim().split(",");
let car = [
  {
    name: "Tuscani",
    isEnd: true,
    divide: "Coupe",
    people: 2,
    start: 200109,
    end: 200810,
  },
  {
    name: "Porter",
    isEnd: true,
    divide: "Truck",
    people: 3,
    start: 197702,
    end: 200405,
  },
  {
    name: "Cortina",
    isEnd: true,
    divide: "Sedan",
    people: 5,
    start: 196801,
    end: 198004,
  },
  {
    name: "Elantra",
    isEnd: true,
    divide: "Sedan",
    people: 5,
    start: 199010,
    end: 199512,
  },
  {
    name: "Equus",
    isEnd: true,
    divide: "Sedan",
    people: 5,
    start: 199904,
    end: 200912,
  },
  {
    name: "Gradneur",
    isEnd: false,
    divide: "Sedan",
    people: 5,
    start: 198607,
    end: 202305,
  },
  {
    name: "Pony",
    isEnd: true,
    divide: "Sedan",
    people: 5,
    start: 197512,
    end: 198201,
  },
  {
    name: "SantaFe",
    isEnd: false,
    divide: "RV",
    people: 7,
    start: 200006,
    end: 202305,
  },
  {
    name: "Aerotown",
    isEnd: false,
    divide: "Bus",
    people: 30,
    start: 199406,
    end: 202305,
  },
  {
    name: "Universe",
    isEnd: false,
    divide: "Bus",
    people: 45,
    start: 200612,
    end: 202305,
  },
];
const solution = (param0, param1) => {
  let day = parseInt(param0);
  let pass = parseInt(param1);
  let result = [];
  car.map((data, idx) => {
    if (day > data.start && data.people >= pass) {
      if (data.isEnd) {
        let str = `${data.name}*(${data.divide})`;
        result.push(str);
      } else {
        let str = `${data.name}(${data.divide})`;
        result.push(str);
      }
    }
  });
  console.log(result.sort((a, b) => a - b).join(","));
  //   if (result.length === 0) {
  //     console.log("!");
  //   } else {
  //     console.log(result);
  //   }
};

solution(input[0], input[1]);
