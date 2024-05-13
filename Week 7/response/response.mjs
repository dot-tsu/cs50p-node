import readlinePromises from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import isEmail from "validator/lib/isEmail.js";

const rl = readlinePromises.createInterface({ input, output });
const main = async () => {
  console.log(
    isEmail(await rl.question("What's your email adress? "))
      ? "valid"
      : "invalid"
  );
};

main();
