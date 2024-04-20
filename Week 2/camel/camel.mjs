import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
