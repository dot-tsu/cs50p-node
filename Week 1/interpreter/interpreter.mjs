import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Expression: ", (expression) => {
  let [x, y, z] = expression.split(" ");

  x = parseFloat(x);
  z = parseFloat(z);
  let result = null;

  switch (y) {
    case "+":
      result = x + z;
      break;
    case "-":
      result = x - z;
      break;
    case "*":
      result = x * z;
      break;
    case "/":
      result = x / z;
      break;
    default:
      console.log("Invalid operator");
  }
  if (result != null) {
    console.log(result);
  }
  rl.close();
});
