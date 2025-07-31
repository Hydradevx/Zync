import { commands } from "../core/commandLoader";

export default {
  name: "help",
  description: "List all available commands",
  execute() {
    console.log("Available Commands:");
    for (const [name, cmd] of commands) {
      console.log(`  ${name} - ${cmd.description}`);
    }
  },
};
