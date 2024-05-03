import readline from "node:readline";

const main = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Plate: ", (plate) => {
    if (isValid(plate)) {
      console.log("Valid");
    } else {
      console.log("Invalid");
    }
    rl.close();
  });
};

const isValid = (plate) => {
  return (
    hasValidLength(plate) &&
    startsWithTwoLetters(plate) &&
    hasValidCharacters(plate) &&
    numbersOnlyAtEnd(plate)
  );
};

const hasValidLength = (plate) => {
  return plate.length >= 2 && plate.length <= 6;
};

const startsWithTwoLetters = (plate) => {
  const firstTwoChars = plate.slice(0, 2);
  return /^[A-Z]{2}/.test(firstTwoChars);
};

const hasValidCharacters = (plate) => {
  return /^[A-Z0-9]+$/.test(plate);
};

const numbersOnlyAtEnd = (plate) => {
  const lastNumberIndex = plate.search(/\d+$/);

  if (lastNumberIndex !== -1) {
    const lastPart = plate.slice(lastNumberIndex);
    const firstDigit = lastPart.charAt(0);

    if (firstDigit === "0") {
      return false;
    }

    return lastPart === plate.slice(lastNumberIndex);
  }

  return true;
};

main();

export { isValid };
