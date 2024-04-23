import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

function calculateFuelPercentage(fraction) {
  const [numerator, denominator] = fraction.split("/").map(Number);

  if (
    !Number.isInteger(numerator) ||
    !Number.isInteger(denominator) ||
    numerator > denominator ||
    denominator === 0 ||
    numerator < 0 ||
    denominator <= 0
  ) {
    console.log("Invalid fraction. Please try again.");
    return;
  }

  const percentage = Math.round((numerator / denominator) * 100);

  if (percentage <= 1) {
    console.log("E");
  } else if (percentage >= 99) {
    console.log("F");
  } else {
    console.log(`${percentage}%`);
  }
}

rl.question("Fraction: ", (fraction) => {
  calculateFuelPercentage(fraction);
  rl.close();
});
