import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let level = null;
const game = (number) => {
  rl.question("Guess: ", (input) => {
    const guess = parseInt(input);

    if (isNaN(guess) || guess > 10 || guess <= 0) {
      console.log("Invalid input");
      game(number);
    } else {
      switch (true) {
        case guess > number:
          console.log("Too large!");
          game(number);
          break;
        case guess < number:
          console.log("Too small!");
          game(number);
          break;
        case guess === number:
          console.log("Just right!");
          rl.close();
          break;
      }
    }
  });
};
const promptUser = () => {
  rl.question("Level: ", (input) => {
    level = parseInt(input);
    if (!level || level <= 0 || level > 10) {
      promptUser();
    }
    const number = Math.floor(Math.random() * level) + 1;
    game(number);
  });
};

promptUser();
