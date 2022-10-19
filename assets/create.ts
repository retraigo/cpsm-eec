import {
  createCanvas,
  EmulatedCanvas2D,
  loadImage,
} from "https://deno.land/x/canvas@v1.4.1/mod.ts";

const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;

const bg = await loadImage(`${__dirname}/certificate.webp`);

const fontFam = await Deno.readFile(
  `${__dirname}/Courgette-Regular.ttf`,
);

export default function create(name: string): string {
  const canvas = createCanvas(1169, 826);

  const ctx = canvas.getContext("2d");

  ctx.moveTo(0, 0);

  ctx.drawImage(bg, 0, 0);

  canvas.loadFont(fontFam, {
    family: "pacifico",
  });

  ctx.font = applyText(
    canvas,
    `${name}`,
  );

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.lineWidth = 2;
/*
ctx.strokeStyle = "#1445a1";
  
//  ctx.shadowColor = "#1445a1";
//  ctx.shadowBlur = 7;
  ctx.strokeText(
    `${name}`,
    555,
    370,
  );
  */
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#000000";
  ctx.fillText(
    `${name}`,
    555,
    370,
  );

  return canvas.toDataURL();
}

function applyText(canvas: EmulatedCanvas2D, text: string, baseSize = 50) {
  const ctx = canvas.getContext("2d");

  let fontSize = baseSize;

  do {
    ctx.font = `${(fontSize -= 10)}px pacifico`;
  } while (ctx.measureText(text).width > canvas.width - 600);

  return ctx.font;
}
