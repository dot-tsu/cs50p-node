import { argv, exit } from "node:process";

const API = "https://api.coindesk.com/v1/bpi/currentprice.json";

const getPrice = async () => {
  try {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error("Fetch failed");
    }
    const data = await response.json();
    return data.bpi.USD.rate_float;
  } catch (error) {
    console.error(error);
    exit(1);
  }
};

const main = async () => {
  let quantity = parseFloat(argv[2]);

  if (argv.length !== 3 || isNaN(quantity) || quantity < 0) {
    console.error("Usage: node bitcoin.mjs {number of bitcoins}");
    exit(1);
  }
  let price = await getPrice();
  console.log(price * quantity);
};

main();
