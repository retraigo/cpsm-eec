import {
  createCanvas,
  EmulatedCanvas2D,
  loadImage,
} from "https://deno.land/x/canvas@v1.4.1/mod.ts";

const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;

const bg = await loadImage(`${__dirname}/certificate_base.webp`);

const fontFam = await Deno.readFile(
  `${__dirname}/Courgette-Regular.ttf`,
);

export default function create(name: string, college: string): string {
  const canvas = createCanvas(3511, 2483);

  const ctx = canvas.getContext("2d");

  ctx.moveTo(0, 0);

  ctx.drawImage(bg, 0, 0);

  canvas.loadFont(fontFam, {
    family: "pacifico",
  });

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
  ctx.font = applyText(
    canvas,
    `${name}`,
  );

  ctx.shadowBlur = 0;
  ctx.fillStyle = "#000000";
  ctx.fillText(
    `${name}`,
    1555,
    1100,
  );

  ctx.font = applyText(
    canvas,
    `${college}`,
  );
  ctx.fillText(
    `${college}`,
    1000,
    1270,
  );

  return canvas.toDataURL();
}

function applyText(canvas: EmulatedCanvas2D, text: string, baseSize = 100) {
  const ctx = canvas.getContext("2d");

  let fontSize = baseSize;

  do {
    ctx.font = `${(fontSize -= 10)}px pacifico`;
  } while (ctx.measureText(text).width > canvas.width - 400);

  return ctx.font;
}
