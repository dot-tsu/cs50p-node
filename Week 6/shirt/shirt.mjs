import fs from "node:fs";
import Jimp from "jimp";

const validateArguments = (args) => {
  if (args.length !== 4) {
    console.error("Usage: node script.js <input_file> <output_file>");
    process.exit(1);
  }

  const inputPath = args[2];
  const outputPath = args[3];

  const inputExt = inputPath.toLowerCase().split(".").pop();
  const outputExt = outputPath.toLowerCase().split(".").pop();

  const validExtensions = ["jpg", "jpeg", "png"];

  if (
    !validExtensions.includes(inputExt) ||
    !validExtensions.includes(outputExt)
  ) {
    console.error("Input and output files must be JPEG or PNG files.");
    process.exit(2);
  }

  if (inputExt !== outputExt) {
    console.error("Input and output files must have the same extension.");
    process.exit(3);
  }

  if (!fs.existsSync(inputPath)) {
    console.error(`The file ${inputPath} doesn't exist.`);
    process.exit(4);
  }

  return [inputPath, outputPath];
};

const convertImage = async (inputPath, outputPath) => {
  try {
    const image = await Jimp.read(inputPath);
    const shirtWidth = image.bitmap.width;
    const shirtHeight = image.bitmap.height;

    const shirtPath = "./shirt.png";
    const shirt = await Jimp.read(shirtPath);
    shirt.resize(shirtWidth, shirtHeight);

    image.composite(shirt, 0, 0);
    await image.writeAsync(outputPath);

    console.log("Shirt overlay added successfully!");
    return true;
  } catch (error) {
    console.error("An error occurred:", error);
    return false;
  }
};

const main = async () => {
  try {
    const [inputPath, outputPath] = validateArguments(process.argv);
    const success = await convertImage(inputPath, outputPath);
    if (!success) {
      console.error("Image conversion failed.");
    }
  } catch (error) {
    console.error("An error occurred during the process:", error);
    process.exit(5);
  }
};

main();
