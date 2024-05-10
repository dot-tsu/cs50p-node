import readlinePromises from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readlinePromises.createInterface({ input, output });

const main = async () => {
  const html = await getHTML();
  const videoSource = parse(html);
  if (videoSource) {
    console.log(`https://youtu.be/${videoSource}`);
  } else {
    console.error("None.");
  }
  process.exit();
};

const getHTML = () => {
  return rl.question("HTML: ");
};

const parse = (html) => {
  const regex = /(?<=embed\/)([^"]+)/g;
  const videoSource = html.match(regex);
  return videoSource ? videoSource.toString() : null;
};

main();
