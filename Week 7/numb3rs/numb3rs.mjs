import readlinePromises from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readlinePromises.createInterface({ input, output });

const validate = (ip) => {
  const regexp =
    /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
  return regexp.test(ip);
};

const getUserInput = async () => {
  return await rl.question("IPv4 Adress: ");
};

const main = async () => {
  const ip = await getUserInput();
  console.log(validate(ip));
  process.exit(1);
};

main();
