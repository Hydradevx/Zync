import { commands } from "./commandLoader";

export async function startCLI() {
  while (true) {
    const input = prompt("Zync > ")?.trim();
    if (!input) continue;

    const [cmdName, ...args] = input.split(" ");
    const command = commands.get(cmdName);

    if (!command) {
      console.warn(`Unknown command: ${cmdName}`);
      continue;
    }

    try {
      await command.execute(args);
    } catch (err) {
      console.error(`Error executing ${cmdName}:`, err);
    }
  }
}
