import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
const PLATE_REGEX = /^[A-Z]{2}[A-Z0-9]?[A-Z0-9]?[A-Z0-9]?[1-9][0-9]?$/; //"The string must start with exactly two characters that are letters (uppercase or lowercase), followed by zero or more letters (uppercase or lowercase), followed by zero or more digits (0-9), and then the string must end."

function isValid(plate) {
  return PLATE_REGEX.test(plate);
}

function main() {
  rl.question("Plate: ", (input) => {
    if (isValid(input)) {
      rl.write("Valid\n");
    } else {
      rl.write("Invalid\n");
    }
    rl.close();
  });
}

main();
