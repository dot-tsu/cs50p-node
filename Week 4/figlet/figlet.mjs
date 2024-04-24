import readline from "node:readline";
import { stdin as input, stdout as output, argv } from "node:process";
import figlet from "figlet";

const rl = readline.createInterface({ input, output });
const FONTS = figlet.fontsSync();
const lowercaseFonts = FONTS.map((fontName) => fontName.toLowerCase());

const convertText = (text, font) => {
  let config = {
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  };

  if (font) {
    const lowercaseFont = font.toLowerCase();
    if (lowercaseFonts.includes(lowercaseFont)) {
      config.font = font;
    } else {
      console.error(`The font "${font}" doesn't exist.`);
      return null;
    }
  } else {
    config.font = FONTS[Math.floor(Math.random() * FONTS.length)];
  }

  let convertedText = figlet.textSync(text, config);
  return convertedText;
};

const promptUser = () => {
  rl.question("Input: ", (input) => {
    if (argv.length < 4 || (argv[2] !== "-f" && argv[2] !== "--font")) {
      console.error("Invalid usage");
      rl.close();
    } else {
      const font = argv[3];
      const convertedText = convertText(input, font);
      if (convertedText !== null) {
        console.log(convertedText);
      }
      rl.close();
    }
  });
};

promptUser();
