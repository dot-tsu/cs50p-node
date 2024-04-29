import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let nameList = [];

let adieu = "Adieu, adieu, ";

rl.on("line", (input) => {
  if (input) {
    nameList.push(input);
  }
  console.log(nameList);
});

rl.on("close", () => {
  for (let name of nameList) {
    if (nameList.indexOf(name) === 0) {
      adieu += `to ${name}`;
    } else if (nameList.indexOf(name) === nameList.length) {
      adieu += `, ${name}`;
    } else {
      adieu += ` and ${name}`;
    }
  }
  console.log(adieu);
});
