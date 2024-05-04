import fs from "node:fs";
import { argv, exit } from "node:process";

const VALID_EXTENSIONS = ["mjs", "cjs", "js"];

const validateArguments = (args) => {
  if (args.length < 3) {
    console.error("Too few command-line arguments. ");
    exit(1);
  }

  if (args.length > 3) {
    console.error("Too many command-line arguments. ");
    exit(2);
  }

  const filename = args[2];

  if (!filename) {
    console.error("Please provide a file path as an argument.");
    exit(3);
  }

  const extension = filename.split(".").pop();

  if (!VALID_EXTENSIONS.includes(extension)) {
    console.error("Not a valid JavaScript file.");
    exit(4);
  }

  return filename;
};

const readFile = (filePath) => {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`File "${filePath}" does not exist.`);
      exit(5);
    }
    throw error;
  }
};

const countLines = (fileContent) => {
  const lines = fileContent.split("\n");
  let lineCount = 0;

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith("//")) {
      lineCount++;
    }
  }

  return lineCount;
};

const main = () => {
  const filename = validateArguments(argv);
  const fileContent = readFile(filename);
  const lineCount = countLines(fileContent);

  console.log(lineCount);
};

main();

