import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

function convert(fraction) {
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
  return percentage;
}

function gauge(percentage) {
  if (percentage <= 1) {
    return "E";
  } else if (percentage >= 99) {
    return "F";
  } else {
    return `${percentage}%`;
  }
}

function main() {
  rl.question("Fraction: ", (fraction) => {
    const percentage = convert(fraction);
    if (percentage !== undefined) {
      const result = gauge(percentage);
      console.log(result);
    }
    rl.close();
  });
}

main();

export { convert, gauge };
