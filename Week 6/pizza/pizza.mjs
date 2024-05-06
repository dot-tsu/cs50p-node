import fs from "node:fs";
import csv from "csv-parser";
import Table from "cli-table3";

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

  const extension = filename.split(".").pop();

  if (extension !== "csv") {
    console.error("Not a valid CSV file.");
    process.exit(4);
  }

  return filename;
};

const filename = validateArguments(process.argv);

if (!fs.existsSync(filename)) {
  console.error(`The file ${filename} doesn't exist.`);
  process.exit(5);
}

const table = new Table({
  style: { "padding-left": 1, "padding-right": 1 },
});

let headers = [];

fs.createReadStream(filename)
  .pipe(csv())
  .on("data", (row) => {
    if (headers.length === 0) {
      headers = Object.keys(row);
      table.push(headers);
    } else {
      table.push(Object.values(row));
    }
  })
  .on("end", () => {
    console.log(table.toString());
  });
