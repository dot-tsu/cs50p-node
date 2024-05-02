const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });
const VOWELS = /[aeiou]/gi;

const promptUser = () => {
  rl.question("Input: ", (input) => {
    const shortenedWord = shorten(input);
    rl.write(shortenedWord);
    process.exit(0);
  });
};

const shorten = (word) => {
  return word.replace(VOWELS, "");
};

promptUser();

module.exports = { shorten };
