import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function convert(time) {
  const [hours, minutes] = time.split(":");
  return parseFloat(hours) + parseFloat(minutes) / 60;
}

function main() {
  rl.question("What time is it? ", (time) => {
    const convertedTime = convert(time);

    if (convertedTime >= 7 && convertedTime <= 8) {
      console.log("breakfast time");
    } else if (convertedTime >= 12 && convertedTime <= 13) {
      console.log("lunch time");
    } else if (convertedTime >= 18 && convertedTime <= 19) {
      console.log("dinner time");
    } else {
      console.log("Not a typical mealtime");
    }

    rl.close();
  });
}

main();
