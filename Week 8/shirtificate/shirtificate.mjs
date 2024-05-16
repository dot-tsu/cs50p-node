import fs from "node:fs";
import PDFDocument from "pdfkit";
import { readFile } from "node:fs/promises";

const WIDTH = 210;
const HEIGHT = 297;

const generateShirtificate = async (name) => {
  const pdfDoc = new PDFDocument({
    size: [WIDTH, HEIGHT],
    margins: { top: 30, bottom: 30, left: 30, right: 30 },
  });
  const imageBytes = await readFile("./shirtificate.png");
  const shirtImage = pdfDoc.openImage(imageBytes);

  pdfDoc.pipe(fs.createWriteStream("shirtificate.pdf"));

  // Title
  pdfDoc.fontSize(12).text("CS50 Shirtificate", 30, 30, { align: "center" });

  // Image
  const imageWidth = shirtImage.width;
  const imageHeight = shirtImage.height;
  const imageScaleFactor = Math.min(
    (WIDTH - 60) / imageWidth,
    (HEIGHT - 120) / imageHeight
  );
  const scaledImageWidth = imageWidth * imageScaleFactor;
  const scaledImageHeight = imageHeight * imageScaleFactor;
  const imageX = (WIDTH - scaledImageWidth) / 2;
  const imageY = (HEIGHT - scaledImageHeight) / 2;

  pdfDoc.rect(imageX, imageY, scaledImageWidth, scaledImageHeight).clip();
  pdfDoc.image(shirtImage, imageX, imageY, {
    width: scaledImageWidth,
    height: scaledImageHeight,
  });

  // Name
  pdfDoc.fillColor("white");
  pdfDoc
    .fontSize(8)
    .text(name + " took CS50", imageX, imageY + scaledImageHeight - 100, { align: "center" });

  pdfDoc.end();
};

const name = process.argv[2] || "John Harvard";
generateShirtificate(name);
