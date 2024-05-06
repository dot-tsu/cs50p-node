import fs from "node:fs";

const validateArguments = (args) => {
  if (args.length < 3) {
    console.error("Too few command-line arguments.");
    process.exit(1);
  }

  if (args.length > 3) {
    console.error("Too many command-line arguments.");
    process.exit(2);
  }

  const filename = args[2];

  if (!filename) {
    console.error("Please provide a file path as an argument.");
    process.exit(3);
  }

  if (!filename.endsWith("csv")) {
    console.error("Not a valid CSV file.");
    process.exit(4);
  }

  if (!fs.existsSync(filename)) {
    console.error(`The file ${filename} doesn't exist.`);
    process.exit(5);
  }

  return filename;
};

const processCSV = (filename) => {
  let students = [];
  try {
    const lines = fs.readFileSync(filename, "utf-8").split("\r\n").slice(1);
    for (let line of lines) {
      const [name, lastName, house] = line
        .replaceAll(" ", "")
        .replaceAll('"', "")
        .split(",");
      students.push({ name: name, lastName: lastName, house: house });
    }
  } catch (err) {
    console.error("Error reading file. ");
    return [];
  }

  return students;
};

const writeCSV = (data) => {
  try {
    let header = Object.getOwnPropertyNames(data[0]).toLocaleString();
    let newCSV = header + "\\n";

    for (let student of data) {
      newCSV += `${student["name"]},${student["lastName"]},${student["house"]}\n`;
    }

    fs.writeFileSync("after.csv", newCSV);
  } catch (err) {
    console.error(`Error writing CSV file: ${err.message}`);
    return false;
  }
  return true;
};

const main = () => {
  const filename = validateArguments(process.argv);
  if (writeCSV(processCSV(filename))) {
    console.log("Your file has been written succesfully. ");
  }
};

main();
