import readlinePromises from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readlinePromises.createInterface({ input, output });

const getLevel = async () => {
  const level = await rl.question("Level: ");
  const parsedLevel = parseInt(level);

  if (
    isNaN(parsedLevel) ||
    parsedLevel < 1 ||
    parsedLevel > 3 ||
    !Number.isInteger(parsedLevel)
  ) {
    console.log("Invalid input. Please enter an integer between 1 and 3.");
    return getLevel();
  }

  return parsedLevel;
};

const generateInteger = (level) => {
  const min = 10 ** (level - 1);
  const max = 10 ** level - 1;
  const integers = [
    Math.floor(Math.random() * (max - min) + min),
    Math.floor(Math.random() * (max - min) + min),
  ];
  return integers;
};

const game = async (a, b) => {
  const correctAnswer = a + b;

  for (let i = 0; i < 3; i++) {
    const userAnswer = await rl.question(`${a} + ${b} = `);
    if (parseInt(userAnswer) === correctAnswer) {
      return 1;
    } else {
      console.log("EEE");
    }
  }
  console.log("Correct answer was:", correctAnswer);
  return 0;
};

const main = async () => {
  let score = 0;
  const level = await getLevel();

  for (let i = 0; i < 10; i++) {
    const [a, b] = generateInteger(level);
    score += await game(a, b);
  }

  console.log("Your score:", score);
  rl.close();
};

main();
