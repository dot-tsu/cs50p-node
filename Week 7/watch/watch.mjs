import readlinePromises from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readlinePromises.createInterface({ input, output });

const main = async () => {
  const html = await getHTML();
  const videoSource = parse(html);
  let youtubeLink;
  if (videoSource) {
    youtubeLink = `https://youtu.be/${videoSource}`;
    console.log(youtubeLink);
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
