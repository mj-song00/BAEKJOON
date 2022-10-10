const [M, ...S] = require("fs")
  .readFileSync("./11723.txt")
  .toString()
  .split("\n");

let answer = [];
const s = [...S];

for (let i = 0; i <= M; i++) {
  const elements = (s[i] || "").split(" ")[0];
  const nums = (s[i] || "").split(" ")[1];

  switch (elements) {
    case "add":
      answer.push(nums);
      break;
    case "check":
      if (answer.includes(nums)) {
        answer.push("1");
      } else {
        answer.push("0");
      }
      break;
    case "remove":
      answer.pop(nums);
      break;
    case "toggle":
      if (answer.includes(nums)) {
        answer.filter((e) => e !== 3);
      } else {
        answer.push(nums);
      }
      break;
    case "all":
      answer = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
      ];
      break;
  }
}

console.log(answer);
