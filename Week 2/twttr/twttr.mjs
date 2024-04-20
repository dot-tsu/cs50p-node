import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
const VOWELS = ["a", "e", "i", "o", "u"];
rl.question("Input: ", (input) => {
  let stringWithoutVowels = input;
  for (let vowel of VOWELS) {
    stringWithoutVowels = stringWithoutVowels.replace(vowel, "");
  }
  console.log(stringWithoutVowels);
  rl.close();
});
