import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const PRICES = {
  "baja taco": 4.25,
  burrito: 7.5,
  bowl: 8.5,
  nachos: 11.0,
  quesadilla: 8.5,
  "super burrito": 8.5,
  "super quesadilla": 9.5,
  taco: 3.0,
  "tortilla salad": 8.0,
};

function getPrice(item) {
  if (!Object.hasOwn(PRICES, item)) {
    return null;
  }
  return PRICES[item].toFixed(2);
}

function askForItem() {
  rl.question("Item: ", (input) => {
    const price = getPrice(input);
    if (price !== null) {
      console.log(`$${price}`);
      rl.close();
    } else {
      console.log("Invalid item. Please try again.");
      askForItem();
    }
  });
}

askForItem();
