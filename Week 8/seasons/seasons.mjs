import readline from "readline";
import {stdin as input, stdout as output} from process;
import { isValid, parse, differenceInMinutes } from "date-fns";

export class SeasonOfLove {
  constructor() {
    this.rl = readline.createInterface({input,output});
  }

  getDateOfBirth() {
    return new Promise((resolve, reject) => {
      this.rl.question("Enter your date of birth (YYYY-MM-DD): ", (answer) => {
        if (isValid(parse(answer, "yyyy-MM-dd", new Date()))) {
          resolve(parse(answer, "yyyy-MM-dd", new Date(0)));
        } else {
          reject("Invalid date format");
        }
      });
    });
  }

  calculateMinutesOld(dateOfBirth) {
    const today = new Date();
    const diffInMinutes = differenceInMinutes(today, dateOfBirth);
    const words = this.numberToWords(diffInMinutes);
    console.log(`${words} minutes`);
  }

  numberToWords(number) {
    const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    switch (true) {
      case number < 20:
        return ones[number];
      case number < 100:
        return `${tens[Math.floor(number / 10)]} ${ones[number % 10]}`.trim();
      case number < 1000:
        return `${ones[Math.floor(number / 100)]} hundred ${this.numberToWords(
          number % 100
        )}`.trim();
      case number < 1000000:
        return `${this.numberToWords(
          Math.floor(number / 1000)
        )} thousand ${this.numberToWords(number % 1000)}`.trim();
      case number < 1000000000:
        return `${this.numberToWords(
          Math.floor(number / 1000000)
        )} million ${this.numberToWords(number % 1000000)}`.trim();
      default:
        return `${this.numberToWords(
          Math.floor(number / 1000000000)
        )} billion ${this.numberToWords(number % 1000000000)}`.trim();
    }
  }

  run() {
    this.getDateOfBirth()
      .then((dateOfBirth) => this.calculateMinutesOld(dateOfBirth))
      .catch((error) => console.error(error))
      .finally(() => this.rl.close());
  }
}

const seasonOfLove = new SeasonOfLove();
seasonOfLove.run();
