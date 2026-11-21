// The joke about the demo — make.fun entry.
// Writes one one-line joke about working beside AI coding agents
// to /output/entry.txt. No network, no input, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Mid-demo, my AI agent fixed the crash by deleting the feature I was about to demo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
