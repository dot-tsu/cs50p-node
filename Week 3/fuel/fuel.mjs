import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

rl.question("Fraction: ", (input) => {
  try {
    const fraction = input.split("/");
    const [numerator, denominator] = [
      parseInt(fraction[0]),
      parseInt(fraction[1]),
    ];

    if (
      isNaN(numerator) ||
      isNaN(denominator) ||
      numerator.toString() !== fraction[0] ||
      denominator.toString() !== fraction[1]
    ) {
      throw new Error("Please insert a valid integer fraction (e.g., 3/4)");
    }

    if (numerator < 0 || denominator <= 0 || numerator > denominator) {
      throw new Error("Please insert a valid Numerator/Denominator");
    }

    const percentaje = (numerator / denominator) * 100;

    if (percentaje === 100) {
      console.log("F");
    } else if (percentaje <= 1) {
      console.log("E");
    } else {
      console.log(`${percentaje}%`);
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
});
