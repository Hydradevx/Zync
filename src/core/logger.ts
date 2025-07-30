import pkg from "../../package.json" assert { type: "json" };
let version = pkg.version

export function logVersion() {
  console.log(`⚡ Running Zync v${version}`);
}
