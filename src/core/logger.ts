import chalk from "chalk";

function timestamp(): string {
  const iso = new Date().toISOString();
  const [, time] = iso.split("T");
  return time?.split(".")[0] || "00:00:00";
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function logStartup(version: string, platform: string) {
  console.clear();
  console.log("🔧 Initializing Zync Core...");
  await sleep(300);
  console.log("📦 Loading modules...");
  await sleep(300);
  console.log("⚡ Setting up CLI environment...");
  await sleep(300);
  console.log("✅ All systems ready!");
  await sleep(500);
  console.clear();
  console.log("=========================");
  console.log(`  ⚡ Zync v${version} (${platform})`);
  console.log("=========================\n");
}

export function initLogger() {
  console.info = (msg?: any, ...args: any[]) => {
    process.stdout.write(chalk.blue(`[INFO ${timestamp()}] `));
    console.log(msg, ...args);
  };
  console.warn = (msg?: any, ...args: any[]) => {
    process.stdout.write(chalk.yellow(`[WARN ${timestamp()}] `));
    console.log(msg, ...args);
  };
  console.error = (msg?: any, ...args: any[]) => {
    process.stdout.write(chalk.red(`[ERROR ${timestamp()}] `));
    console.log(msg, ...args);
  };
  (console as any).success = (msg?: any, ...args: any[]) => {
    process.stdout.write(chalk.green(`[OK ${timestamp()}] ✅ `));
    console.log(msg, ...args);
  };
}
