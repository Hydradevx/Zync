import { logStartup, initLogger } from "./core/logger";
import { loadCommands } from "./core/commandLoader";
import { showSplash } from "./core/ui";
import { startCLI } from "./core/cli";
import pkg from "../package.json" assert { type: "json" };

const v = pkg.version;
const p = Bun.platform === "darwin" ? "macOS" :
          Bun.platform === "win32" ? "Windows" : "Linux";

await logStartup(v, p);
initLogger();

await loadCommands();
showSplash(v, p);
await startCLI();
