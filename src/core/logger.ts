import pkg from "../../package.json" assert { type: "json" };

const version = pkg.version;
const platform =
  Bun.platform === "darwin"
    ? "macOS"
    : Bun.platform === "win32"
    ? "Windows"
    : "Linux";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// TODO : make this functional command etc loader
export async function logStartup() {
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
