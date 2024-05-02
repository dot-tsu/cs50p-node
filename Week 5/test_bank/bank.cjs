function value(greeting) {
  greeting = greeting.toLowerCase();
  let payment = 100;
  if (greeting === "hello") {
    payment = 0;
  } else if (greeting.startsWith("h")) {
    payment = 20;
  }
  return payment;
}

function main() {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Greeting: ", (greeting) => {
    const payment = value(greeting);
    console.log(`$${payment}`);
    rl.close();
  });
}

if (require.main === module) {
  main();
}

module.exports = { value };
