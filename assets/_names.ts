import { parse } from "https://deno.land/std@0.160.0/encoding/csv.ts";
import { capitalize } from "https://deno.land/x/lala@v3.1.5/functions/util/capitalize.ts";

const __dirname = new URL(".", import.meta.url).pathname;
const fdpDetails = new TextDecoder("utf-8").decode(
  Deno.readFileSync(`${__dirname}/fdp.csv`),
);

const data = parse(fdpDetails);

const m = data.map((x) => {
  return {
    name: x[0].split(".").map((s) => capitalize(s, true)).join(".").split(" ").map((s) => capitalize(s)).join(" "),
    email: x[1],
    college: x[3].split(" ").map((s) => capitalize(s)).join(" "),
    phone: x[2],
  };
});

Deno.writeFileSync(`${__dirname}/fdp.json`, new TextEncoder().encode(JSON.stringify(m)))

console.log("DONE")