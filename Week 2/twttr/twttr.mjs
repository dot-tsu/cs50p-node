import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
const VOWELS = /[aeiou]/gi; //" REGEX: Match all occurrences of any vowel character ('a', 'e', 'i', 'o', or 'u'), regardless of case (uppercase or lowercase)."

const promptUser = () => {
  rl.question("Input: ", handleUserInput);
};

const handleUserInput = (input) => {
  const stringWithoutVowels = input.replace(VOWELS, "");
  rl.write(stringWithoutVowels);
  rl.close();
};

promptUser();
