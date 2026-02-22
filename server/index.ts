import { spawn } from "child_process";
import path from "path";

const BOT_DIR = path.join(process.cwd(), "bot");

console.log("Starting TOOSII-XD ULTRA bot...");

const bot = spawn("node", ["index.js"], {
  cwd: BOT_DIR,
  stdio: "inherit",
  env: { ...process.env },
});

bot.on("error", (err) => {
  console.error("Failed to start bot:", err.message);
  process.exit(1);
});

bot.on("exit", (code) => {
  console.log(`Bot exited with code ${code}`);
  process.exit(code || 0);
});

process.on("SIGINT", () => {
  bot.kill("SIGINT");
});
process.on("SIGTERM", () => {
  bot.kill("SIGTERM");
});
