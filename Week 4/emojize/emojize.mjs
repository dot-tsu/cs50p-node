import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { emojify } from "node-emoji"; // Run npm install

const rl = readline.createInterface({ input, output });

const promptUser = () => {
  rl.question("Input: ", (input) => {
    console.log(emojify(input));
    rl.close();
  });
};

promptUser();
