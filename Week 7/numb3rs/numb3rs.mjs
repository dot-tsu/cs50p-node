const validate = (ip) => {
  const regexp = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/
  return regexp.test(ip);
};

const main = () => {
  const ip = "255.255.255.255";
  console.log(validate(ip));
};

main();
