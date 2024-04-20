import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

rl.question("Camel: ", (camelText) => {
  for (let char of camelText) {
    if (char === char.toUpperCase()) {
      rl.write("_");
      rl.write(char.toLowerCase());
    } else {
      rl.write(char);
    }
  }
  rl.close();
});
