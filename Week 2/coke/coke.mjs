import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
const COKE_PRICE = 50;
const ACCEPTED_COINS = [25, 10, 5];

let totalInserted = 0;

const askForCoin = () => {
  rl.question("Insert coin (25, 10, or 5 cents): ", (input) => {
    const coin = parseInt(input);

    if (ACCEPTED_COINS.includes(coin)) {
      totalInserted += coin;
    } else {
      console.log("Invalid coin denomination. Try again.");
    }
    processCoins();
  });
};

const processCoins = () => {
  if (totalInserted < COKE_PRICE) {
    console.log(`Amount due: ${COKE_PRICE - totalInserted}`);
    askForCoin();
  } else {
    const change = totalInserted - COKE_PRICE;
    console.log(`Change owed: ${change} cents`);
    rl.close();
  }
};

askForCoin();
