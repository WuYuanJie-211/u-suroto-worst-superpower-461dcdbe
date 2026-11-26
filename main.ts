import * as fs from "fs";

const line =
  "I can fly, but only three inches off the ground and only backwards, so my escape from the bank robbery was a slow moonwalk into a wall.";

const outPath = "/output/entry.txt";
if (line.length > 140) {
  throw new Error(`line is ${line.length} chars, over the 140-char gate`);
}
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(outPath, line + "\n", "utf8");
fs.chmodSync(outPath, 0o644);
