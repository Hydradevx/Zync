import { readdirSync } from "fs";
import { join } from "path";

export interface Command {
  name: string;
  description: string;
  execute(args: string[]): Promise<void> | void;
}

export const commands: Map<string, Command> = new Map();

export async function loadCommands() {
  const commandsDir = join(import.meta.dir, "../commands");
  const files = readdirSync(commandsDir).filter((f) => f.endsWith(".ts"));

  for (const file of files) {
    const modulePath = join(commandsDir, file);
    const mod = await import(modulePath);
    const cmd: Command = mod.default;

    if (cmd?.name && typeof cmd.execute === "function") {
      commands.set(cmd.name, cmd);
      (console as any).success(`Loaded command: ${cmd.name}`);
    } else {
      console.warn(`Skipping invalid command file: ${file}`);
    }
  }
}
