// The 4AM Commit — main.ts
// Writes exactly one commit message to /output/entry.txt (no trailing newline).
import { writeFileSync, mkdirSync } from "node:fs";

function buildEntry(): string {
  const hour = "4am";
  const firstBug = "the bug I introduced at 2am";
  const earlierBug = "the bug I introduced at midnight";
  const punchline = "At this point I am just a bug with a commit history.";
  return `${hour}: fixed ${firstBug} fixing ${earlierBug}. ${punchline}`;
}

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, buildEntry(), { encoding: "utf8" });
