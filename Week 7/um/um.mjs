import readlinePromises from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readlinePromises.createInterface({ input, output });

const main = async () => {
  console.log(count(await rl.question("Text: ")));
};

const count = (text) => {
  const regex = /\bum\b/gi;
  let matches = text.match(regex) ?? [];
  return matches.length;
};

main();

export { count };
