import { logStartup, initLogger } from "./core/logger";
import pkg from "../package.json" assert { type: "json" };

const version = pkg.version;
const platform =
  Bun.platform === "darwin"
    ? "macOS"
    : Bun.platform === "win32"
    ? "Windows"
    : "Linux";

await logStartup(version, platform);

initLogger();

console.info("Zync is ready.");
