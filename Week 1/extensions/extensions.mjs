import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("File Name: ", (filename) => {
  let mimeType;

  filename = filename.toLowerCase().split(".");
  let extension = filename[filename.length - 1];

  switch (extension) {
    case "gif":
      mimeType = "image/gif";
      break;
    case "jpg":
    case "jpeg":
      mimeType = "image/jpeg";
      break;
    case "png":
      mimeType = "image/png";
      break;
    case "pdf":
      mimeType = "application/pdf";
      break;
    case "txt":
      mimeType = "text/plain";
      break;
    case "zip":
      mimeType = "application/zip";
      break;
    default:
      mimeType = "application/octet-stream";
  }

  console.log(mimeType);
  rl.close();
});
