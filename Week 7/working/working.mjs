import readlinePromises from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readlinePromises.createInterface({ input, output });
const main = async () => {
  const result = convert(await rl.question("Hours: "));
  console.log(result);
};

const convert = (input) => {
  let times = input.split(" to ");
  if (times.length != 2) {
    return null;
  }
  let convertedTimes = [];

  for (let time of times) {
    let temp = time.split(" ")[0].split(":");
    if (temp[0] < 1 || temp[0] > 12 || temp[1] < 0 || temp[1] > 59) {
      return null;
    }

    let hour = time.includes("PM")
      ? (parseInt(temp[0]) + 12).toString().padStart(2, "0")
      : temp[0].toString().padStart(2, "0");
    let minute = temp[1].padStart(2, "0") ?? "00";

    convertedTimes.push(`${hour.toString()}:${minute.toString()}`);
  }

  return `${convertedTimes[0]} to ${convertedTimes[1]}`;
};

main();
export { convert };
