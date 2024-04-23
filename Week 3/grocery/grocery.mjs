import readline from "node:readline";
import { stdin as input, stdout as output, exit } from "node:process";

const rl = readline.createInterface({ input, output });

const groceryList = {};

rl.on("line", (input) => {
  const item = input.trim().toLowerCase();
  if (item) {
    groceryList[item] = (groceryList[item] || 0) + 1;
  }
});

rl.on("close", () => {
  const sortedItems = Object.keys(groceryList).sort((a, b) =>
    a.localeCompare(b)
  );
  sortedItems.forEach((item) => {
    console.log(`${groceryList[item]} ${item.toUpperCase()}`);
  });
  exit(0);
});
