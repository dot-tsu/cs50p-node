import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const isValidDate = (month, day) =>
  month >= 1 && month <= 12 && day >= 1 && day <= 31;

const convertDate = (input) => {
  const rawDate = input.split("/");

  if (rawDate.length === 1) {
    const [month, day, year] = input.split(" ");
    const monthIndex = MONTHS.indexOf(month.toLowerCase());

    if (monthIndex === -1 || !day || !year) {
      return null;
    }

    const monthNumber = monthIndex + 1;
    const formattedDay = day.replace(",", "").padStart(2, "0");

    return isValidDate(monthNumber, formattedDay)
      ? `${year}-${monthNumber.toString().padStart(2, "0")}-${formattedDay}`
      : null;
  }

  const [monthStr, dayStr, year] = rawDate;
  const month = parseInt(monthStr, 10);
  const day = parseInt(dayStr, 10);

  return isValidDate(month, day)
    ? `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`
    : null;
};

const promptUser = () => {
  rl.question("Date: ", (input) => {
    const date = convertDate(input);

    if (!date) {
      console.log(`Invalid date format. Please enter the date in one of the following formats:
- Month DD, YYYY (e.g., January 31, 2023)
- MM/DD/YYYY (e.g., 01/31/2023)`);
      promptUser();
    } else {
      console.log(date);
      rl.close();
    }
  });
};

promptUser();
